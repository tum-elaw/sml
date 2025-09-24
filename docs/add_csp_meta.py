import os
import re

CSP_META = (
    '<meta http-equiv="Content-Security-Policy" '
    'content="default-src \'self\'; script-src \'none\'; connect-src \'none\'; '
    'img-src \'self\' data: blob:; style-src \'self\' \'unsafe-inline\'; '
    'font-src \'self\'; base-uri \'none\'; frame-ancestors \'none\'">'
)

def add_csp_to_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if CSP meta already exists
    if CSP_META in content:
        return

    # Insert after <head> if present
    head_match = re.search(r'<head[^>]*>', content, re.IGNORECASE)
    if head_match:
        insert_pos = head_match.end()
        new_content = content[:insert_pos] + '\n    ' + CSP_META + content[insert_pos:]
    else:
        # If no <head>, try to insert before <html> or at the top
        html_match = re.search(r'<html[^>]*>', content, re.IGNORECASE)
        if html_match:
            insert_pos = html_match.end()
            new_content = (
                content[:insert_pos] +
                '\n<head>\n    ' + CSP_META + '\n</head>' +
                content[insert_pos:]
            )
        else:
            # No <html> tag, just prepend
            new_content = '<head>\n    ' + CSP_META + '\n</head>\n' + content

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

def process_directory(root_dir):
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.lower().endswith('.html'):
                file_path = os.path.join(dirpath, filename)
                add_csp_to_file(file_path)
                print(f"Processed: {file_path}")

if __name__ == "__main__":
    process_directory(os.path.dirname(os.path.abspath(__file__)))