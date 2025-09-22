#include "stdio.h"

int main(){

    int n =3,k=1;
    
    for(int i=1; i<=n;i++){
        for(int j=1;j<=i;j++){
            for(int k=1;k<=2;k++){
                printf("%d",i);
            }
            printf("\n");
        }
        for(int j=1;j<=2+i;j++){
            printf("%d",k++);
        }
        printf("\n");
    }
    return 0;
}