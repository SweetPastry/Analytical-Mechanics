function y = q1_3(x,mu,sigma)  
    % ����һ����̬�ֲ��ĸ����ܶȺ���ֵ  
    y =  1 / (sqrt(2 * pi) * sigma) * ...
        exp(-((x - mu) / sigma).^2 / 2);  
end  
  
%% 
% ���׵Ľ�����Ƶ����bվ����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  �ۿ���ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
