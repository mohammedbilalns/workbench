#include <stdio.h>
#include <string.h>

int main() {
  int i = 0, count = 0;

  char name[10];
  printf("Enter name: ");
  fgets(name, sizeof(name), stdin);

  // Remove the newline character if it exists
  name[strcspn(name, "\n")] = '\0';

  int nameSize = strlen(name);
  printf("Size of String %s is %d\n", name, nameSize);

  // Loop to count characters manually
  while (name[i] != '\0') {
    count++;
    i++;
  }
  printf("Size using loop is %d\n", count);

  return 0;
}
