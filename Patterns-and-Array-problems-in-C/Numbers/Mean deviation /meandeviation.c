#include "stdio.h"

int main() {
  int dataSize, data[50];
  printf("Enter the size of the data: ");
  scanf("%d", &dataSize);

  printf("Ente the data: ");
  for (int i = 0; i < dataSize; i++) {
    scanf("%d", &data[i]);
  }
}