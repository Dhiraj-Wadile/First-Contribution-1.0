#include <bits/stdc++.h>
using namespace std;

int main(){
    string s;
    cin>>s;
    string rev;
    for(int i=s.size()-1;i>=0;--i){
        rev.push_back(s[i]);

    }
cout<<rev<<endl;
if(s==rev)
    {cout<<"Yes";
}
else{
    cout<<"No";
}
}
