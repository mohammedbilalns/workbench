#include "stdio.h"

int main(){

    int n=4,k=0,l=3;
    for(int i=1;i<=2*n-1;i++){
        k+= i<=n ?1 :-1;
        for(int j=1;j<=k;j++){

            printf("%d",l--);
        }
        l+= i<n ? 2*i+1 : 0;
        printf("\n");
    }
   
    return 0;
}
