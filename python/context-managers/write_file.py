from contextlib import contextmanager

@contextmanager
def open_file2(file, mode):
    try:
        f = open(file, mode)
        yield f
    finally:
        f.close()




   
class Open_File():
    def __init__(self, filename, mode) -> None:
        self.filename = filename
        self.mode = mode 

    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_val, traceback):
        self.file.close()


with open_File2('sample.txt', 'w') as f:
    f.write("Testing")

print(f.closed)
