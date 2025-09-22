#include <stdio.h>
#include <string.h>

int main() {
  char str1[50] = "fsndfkj";
  char str2[] = "lkmfmlmkdf";
  int str1Size = strlen(str1);
  int str2Size = strlen(str2);
  int i;

  // strcat
  strcat(str1, str2);
  puts(str1);
  // strncat

  // manual
  for (i = 0; i <= str2Size; i++) {
    str1[str1Size] = str2[i];
    str1Size++;
  }
  puts(str1);
}