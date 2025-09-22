#include "string.h"
#include <stdio.h>
int main() {

  char str1[10] = "Computer";
  char str2[10] = "ComPuter";

  int isSame = strcmp(str1, str2);
  printf("%d", isSame);
}