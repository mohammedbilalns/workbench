#include "stdio.h"

int main() {
  int limit, firstTerm = 0, secondTerm = 1, i;
  int nextTerm = firstTerm + secondTerm;

  printf("Enter the number of terms to print:");
  scanf("%d", &limit);

  printf("%d\t%d\t", firstTerm, secondTerm);
  for (i = 3; i <= limit; i++) {
    printf("%d\t", nextTerm);
    firstTerm = secondTerm;
    secondTerm = nextTerm;
    nextTerm = firstTerm + secondTerm;
  }
  return 0;
}