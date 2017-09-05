#!/usr/bin/env python

# Special thanks to user Chris Down on stackoverflow! https://unix.stackexchange.com/questions/164602/how-to-output-the-directory-structure-to-json-format
# And also, special thanks to user Sergey on askubuntu! https://askubuntu.com/questions/209449/is-there-a-way-to-batch-export-svgs-to-pngs

import os
import errno

def path_hierarchy(path):
    
    hierarchy = {
        'type': 'folder',
        'name': os.path.basename(path),
        'path': path,
    }

    try:
        file_list = os.listdir(path)
        hierarchy['children'] = [
            path_hierarchy(os.path.join(path, contents))
            for contents in file_list
        ]
    except OSError as e:
        if e.errno != errno.ENOTDIR:
            raise
        hierarchy['type'] = 'file'


    return hierarchy

if __name__ == '__main__':
    import json
    import sys

    try:
        directory = sys.argv[1]
    except IndexError:
        directory = "."
    
    json_dict = path_hierarchy(directory)

    with open('./assets.json', 'w') as outfile:
        json.dump(json_dict, outfile)
