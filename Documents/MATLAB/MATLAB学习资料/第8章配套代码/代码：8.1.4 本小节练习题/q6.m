function h = q6(n, x)   
% Q6 ʹ�õݹ����Hermite����ʽ
    if n == 0  
        h = 1;  
    elseif n == 1  
        h = 2 * x;  
    else  
        h = 2 * x * q6(n-1, x) - 2 * (n-1) * q6(n-2, x);  
    end  
end  
  
%% 
% ���׵Ľ�����Ƶ��ҿ���bվ��ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  �ۿ���ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
