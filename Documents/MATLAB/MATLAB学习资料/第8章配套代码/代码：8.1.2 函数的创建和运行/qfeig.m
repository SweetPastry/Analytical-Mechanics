function e = qfeig(A)
% �����A������ֵe
% ��A���Ƿ����򷵻�[ ]
    e = [ ];
    if size(A,1) ~= size(A,2)
        return 
    end
    e = eig(A);
end  
 
%% 
% ���׵Ľ�����Ƶ����bilibili����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  �ۿ���ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
