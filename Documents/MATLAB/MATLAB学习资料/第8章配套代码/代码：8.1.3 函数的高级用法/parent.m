function parent
 % MATLAB�����Ϲ���Ƕ�׺���������
    disp('This is the parent function')
    nestedfx
       function nestedfx
          disp('This is the nested function')
       end
end