#include "stdio.h"

int main() {
  char character;
  int isVowel = 0;
  printf("Enter the character to check ");
  scanf("%c", &character);

  isVowel = (character == 'a') || (character == 'A') || (character == 'e') ||
            (character == 'E') || (character == 'i') || (character == 'I') ||
            (character == 'o') || (character == 'O') || (character == 'u') ||
            (character == 'U');
  if (isVowel) {
    printf("%c is vowel", character);
  } else {
    printf("%c is consonant ", character);
  }
}