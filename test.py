import os, errno

directory = "/Users/sunny/workspace/my-python-directory";

try:
    os.makedirs(directory)
except OSError as e:
    if e.errno != errno.EEXIST:
        raise