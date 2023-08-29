#include <iostream>
using namespace std;

int maximizeProfit(int prices[], int n) {
    int dp[n + 1];
    dp[0] = 0;

    for (int i = 1; i <= n; ++i) {
        int maxProfit = 0;
        for (int j = 0; j < i; ++j) {
            maxProfit = max(maxProfit, prices[j] + dp[i - j - 1]);
        }
        dp[i] = maxProfit;
    }

    return dp[n];
}

int main() {
    int n;
    cout << "Enter the value of n: ";
    cin >> n;

    int prices[n];
    cout << "Enter the prices for sizes 1 to n: ";
    for (int i = 0; i < n; ++i) {
        cin >> prices[i];
    }

    int maxPrice = maximizeProfit(prices, n);
    cout << "Maximum profit: " << maxPrice << endl;

    return 0;
}
