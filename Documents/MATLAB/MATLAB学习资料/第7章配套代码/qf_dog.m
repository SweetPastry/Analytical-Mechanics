classdef qf_dog % ������һ����Ϊqf_dog����
    properties % ��������
        color % ������ɫ
        age % ��������
        kind % ��������
    end
    methods % ��������
        % �Է��ķ���
        % ����˵����
        % ~ ��ʾ��ǰʵ�������������ǲ�����Ҫ�õ��ö��������~���棩
        % x ��ʾ���ݸ������Ĳ��������ԵĹ�������
        function eat(~, x)
            disp(["�ҳ���" x "�˹�����"]) % ��ʾ�����˶��ٿ˹���
        end
        % ˯���ķ���
        function sleep(~)
            disp('˯�������ѽ��') % ��ʾ��˯��ʱ��״̬
        end
        % ɢ���ķ���
        function walk(~)
            disp('������һ��ɢ���ÿ���ѽ��') % ��ʾ��ɢ��ʱ��״̬
        end
        % ��Ĺ��캯��
        % ����˵����
        % color ������ɫ
        % age ��������
        % kind ��������
        % obj ��ʾ��ǰʵ������
        function obj = qf_dog(color, age, kind)
            obj.color = color; % ��ʵ�������color���Ը�ֵ
            obj.age = age; % ��ʵ�������age���Ը�ֵ
            obj.kind = kind; % ��ʵ�������kind���Ը�ֵ
        end
    end
end