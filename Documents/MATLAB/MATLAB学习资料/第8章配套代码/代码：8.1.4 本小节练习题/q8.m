function a = q8(b)
% Q8 Excel�����ƺ���ŵ�ת��
    if isnumeric(b)  % ���ת������
        a = ''; % ��ʼ������ַ�����  
        while b > 0  
            b = b - 1; 
            remainder = mod(b, 26);  
            a = [char(remainder + 'A') a];  
            b = floor(b / 26); 
        end  
    else   % ������ת���
        [~,ind] = ismember(char(upper(b)),'A':'Z');
        d = flip(26 .^((1:length(b))-1));
        a = sum(ind.*d);
    end
end  
  
%% 
% ���׵Ľ�����Ƶ��ҿ���bվ��ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  �ۿ���ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
