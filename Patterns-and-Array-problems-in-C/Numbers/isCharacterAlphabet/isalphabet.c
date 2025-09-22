#include "stdio.h"

int main() {
  char character;
  printf("Enter the character to check: ");
  scanf("%c", &character);

  if (character >= 65 && character <= 90 ||
      character >= 97 && character <= 122) {
    printf("%c is a character", character);
  } else {
    printf("%c is not a character", character);
  }
}