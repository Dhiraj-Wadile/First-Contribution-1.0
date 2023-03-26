#include <bits/stdc++.h>
using namespace std;

int digit(int n){
      int digit=0;
    while(n){
        digit=digit+n%10;
        n=n/10;
    }
   return digit;
}

int main(){
    int a,b;
    cin>>a>>b;
    cout<<digit(a)+digit(b);
    return 0;
}