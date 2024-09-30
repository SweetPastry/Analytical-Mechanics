function F = q5(A, method, v) 
    % Q5 �ȱʧֵ
    F = A;
    if sum(isnan(A)) == 0
        return  % ���û��ȱʧֵ��ֱ�ӷ���
    end
    if strcmp(method,'constant')
        F(isnan(F)) = v;
    elseif strcmp(method,'previous')
        F = fill_last_one(A);
    elseif strcmp(method,'next')
        F = flip(fill_last_one(flip(A)));
    end
end

% �����fill_last_one��һ���ֲ�����
function F = fill_last_one(A)
    F = A;
    lastValidValue = NaN;
    for i = 1:length(F)
        if isnan(F(i))
            F(i) = lastValidValue;
        else
            lastValidValue = F(i);
        end
    end
end  
  
%% 
% ���׵Ľ�����Ƶ����bվ����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��Ƶ�ۿ���վ�� https://www.bilibili.com/video/BV1Xm41167aC/
