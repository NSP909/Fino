function results = analyze_data(incomes, creditScores)
    % Income analysis
    x = 1:length(incomes);
    [p, S] = polyfit(x, incomes, 2);
    yfit = polyval(p, x);
    R2 = 1 - sum((incomes - yfit).^2)/sum((incomes - mean(incomes)).^2);
    
    % Trend direction
    trend_direction = sign(p(1));
    
    % FFT for seasonality
    Y = fft(incomes);
    P2 = abs(Y/length(incomes));
    P1 = P2(1:floor(length(incomes)/2)+1);
    P1(2:end-1) = 2*P1(2:end-1);
    seasonal_components = sum(P1 > mean(P1));
    
    % Credit score analysis
    [h, p_value] = chi2gof(creditScores);
    is_normal = p_value > 0.05;
    
    % Package results
    results = struct();
    results.incomeFitR2 = double(R2);
    results.incomeTrend = double(trend_direction);
    results.incomeSeasonality = double(seasonal_components);
    results.creditScoreDistribution = logical(is_normal);
    results.confidenceInterval = [mean(creditScores) - 2*std(creditScores), ...
                                mean(creditScores) + 2*std(creditScores)];
end