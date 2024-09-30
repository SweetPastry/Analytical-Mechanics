function qf_hanoi2(n,a,b,c)  
    global S
    if n == 1  % 递归的出口：只有一个盘子时
        S = [S, a+"→"+c];
        fprintf('从%s移到%s\n',a,c)  % 直接将盘子从起始柱移动到目标柱  
    else  
        % 递归步骤：  
        % (1) 先将柱a上方的n-1个圆盘借助c移动至b
        qf_hanoi2(n-1,a,c,b)  % 递归调用，此时c作为辅助柱，b作为目标柱  
        % (2) 再将柱a剩下的1个最大的圆盘移动至c  
        S = [S, a+"→"+c];
        fprintf('从%s移到%s\n',a,c)  % 移动最大的盘子到目标柱c  
        % (3) 最后将柱b上的全部n-1个圆盘借助a移动至c  
        qf_hanoi2(n-1,b,a,c)  % 递归调用，此时a作为辅助柱，c作为目标柱  
    end  
end  
  
%% 
% 配套的讲解视频可以在b站免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  视频观看网站： https://www.bilibili.com/video/BV1Xm41167aC/
