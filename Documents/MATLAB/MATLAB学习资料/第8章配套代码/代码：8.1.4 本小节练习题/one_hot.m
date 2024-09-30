function [D,cats] = one_hot(x)
% Q9 ����������ת��Ϊ���ȱ���(One-Hot Encoding)
    s = string(x);
    cats = unique(s);  
    cats = reshape(cats,1,[ ]);  % ת����������
    D = (s(:) == cats) * 1;
end  
  
%% 
% ���׵Ľ�����Ƶ������bilibili����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
