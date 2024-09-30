function parent
 % MATLAB官网上关于嵌套函数的例子
    disp('This is the parent function')
    nestedfx
       function nestedfx
          disp('This is the nested function')
       end
end