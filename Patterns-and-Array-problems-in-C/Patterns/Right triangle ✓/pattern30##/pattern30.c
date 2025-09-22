#include "stdio.h"

int main(){
    int n= 7,k=1,l=n ,m,x=0;

    for(int i=1;i<=n;i++){
        m= n-i+1;
        for(int j=1;j<=i;j++){
            printf("%d ",k);
            k-= j<i ? m: 0 ;
            m++;
        }
        l--;
        x+=l;
        k+=x+1;
    printf("\n");
        
    }
    return 0;
}