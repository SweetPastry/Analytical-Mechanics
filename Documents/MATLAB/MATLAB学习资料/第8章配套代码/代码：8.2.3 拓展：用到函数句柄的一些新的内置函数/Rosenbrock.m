function   y = Rosenbrock(x)
    tem1 = x(1:end-1);  
    tem2 = x(2:end);
    y = sum(100 * (tem2-tem1.^2).^2 + (tem1-1).^2);
end  
  
%% 
% ���׵Ľ�����Ƶ��ҿ���bվ��ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��Ƶ�ۿ���վ�� https://www.bilibili.com/video/BV1Xm41167aC/
