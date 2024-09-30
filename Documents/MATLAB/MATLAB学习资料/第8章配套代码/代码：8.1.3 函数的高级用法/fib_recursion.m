function F =  fib_recursion(n)
% 利用递归求解斐波那契数列
    if n == 1 || n == 2
        F = 1; 
    else
        F = fib_recursion(n-1) +  fib_recursion(n-2);
    end
end  
  
%% 
% 配套的讲解视频可在bilibili上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  观看地址： https://www.bilibili.com/video/BV1Xm41167aC/
