function y = intefun2(x)
    % ����ķ���
    % if x > 1
    %      y = 3*x.^2;
    % else
    %      y = x+1;
    % end
    
    % ��ȷ�ķ���1��
    y = x;
    n = length(y);
    for ii = 1:n
        if x(ii) > 1
             y(ii) = 3*x(ii).^2;
        else
             y(ii) = x(ii)+1;
        end
    end
    
    % ��ȷ�ķ���2��
    % y = x;
    % ind1 = x>1;
    % y(ind1) = 3*x(ind1).^2;
    % ind2 = ~ind1;
    % y(ind2) = x(ind2) + 1;
    
    % ��ȷ�ķ���3��
    % y = x;
    % y(x>1) = 3*x(x>1).^2;
    % y(x<=1) = x(x<=1) + 1;
    
    % % ��ȷ�ķ���4��
    % y = (x>1).*(3*x.^2) + (x<=1).*(x+1);

end  
  
%% 
% ���׵Ľ�����Ƶ������bվ����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��Ƶ�ۿ���վ�� https://www.bilibili.com/video/BV1Xm41167aC/
