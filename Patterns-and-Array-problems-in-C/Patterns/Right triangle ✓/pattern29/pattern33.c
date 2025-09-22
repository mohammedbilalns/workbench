#include "stdio.h"

int main(){

    int n= 5,k=1 ;
    char c;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            c = k%2==1 ? 'a' : 'A';
            printf("%c",k+c-1);
            k++;
        }
       printf("\n"); 
    }


    return 0;
}