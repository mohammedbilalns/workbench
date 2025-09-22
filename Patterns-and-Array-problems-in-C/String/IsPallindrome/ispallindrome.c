#include "stdio.h"
#include "string.h"

int main() {
  char word[50];
  int i, ispallindrome = 1;
  printf("Enter the word: ");
  scanf("%s", word);

  int wordSize = strlen(word);

  for (i = 0; i < wordSize / 2; i++) {
    if (word[i] == word[wordSize - i - 1]) {
      ispallindrome = 0;
    }
  }
  if (ispallindrome == 0) {
    printf("%s is pallindrome", word);
  } else {
    printf("%s is not pallindrome", word);
  }
}