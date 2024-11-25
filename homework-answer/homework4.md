@import "../style.less"

# 经典力学第四次作业

## L03.06
考究某一时刻内侧圆柱与外侧圆柱接触的那个点, 该点瞬时速度为 0, 而该点的瞬时速度由两部分组成, 一部分是绕内侧圆柱自转的速度, 另一部分随内侧圆柱平动的速度, 记 $\theta$ 是内侧圆柱圆心与外侧圆柱圆心连线与竖直方向所成角, $\varphi$ 是内侧圆柱圆心与接触点连线与竖直方向所成角,
$$
\dot{\theta}\left( R-r \right) =\dot{\varphi}r.
$$

势能容易看出 $V=mg\left( R-r \right) \left( 1-\cos \theta \right)$, 所以
$$
\begin{align*}
L=T-V&= \dfrac{1}{2}m\left( R-r \right) ^2\dot{\theta}^2+ \dfrac{1}{2} \dfrac{1}{2}mr^2\dot{\varphi}^2-mg\left( R-r \right) \left( 1-\cos \theta \right) 
\\
&= \dfrac{3}{4}m\left( R-r \right) ^2\dot{\theta}^2-mg\left( R-r \right) \left( 1-\cos \theta \right). 
\end{align*}
$$

根据 Lagrange 方程 $\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{\theta}}-\dfrac{\partial L}{\partial \theta}=0$ 并利用小角度近似 $\sin \theta \sim \theta$ 得到
$$
 \dfrac{3}{2}m\left( R-r \right) ^2\ddot{\theta}+mg\left( R-r \right) \theta =0，
$$
是一个简谐运动方程,
$$
\omega _{0}^{2}= \dfrac{mg\left( R-r \right)}{ \dfrac{3}{2}m\left( R-r \right) ^2}= \dfrac{2}{3} \dfrac{g}{\left( R-r \right)},
$$

$$
T= \dfrac{2\pi}{\omega _0}=\pi \sqrt{ \dfrac{6\left( R-r \right)}{g}}.
$$

## L03.11
记 $\overline{OC}=D$ 根据几何关系立刻有
$$
\begin{cases}
	x=D\cos \omega _0t+q\sin \omega _0t,&		\,\,\\\\
	y=D\sin \omega _0t-q\cos \omega _0t,&		\,\,\\
\end{cases}
$$

代入 Lagrange 量
$$
\begin{align*}
L&=T-V= \dfrac{1}{2}m\left( \dot{x}^2+\dot{y}^2 \right) -mgy
\\
&= \dfrac{1}{2}m\omega _{0}^{2}\left( D^2+q^2 \right) + \dfrac{1}{2}m\dot{q}^2-m\omega _0D\dot{q}+mgq\cos \omega _0t-mgD\sin \omega _0t.
\end{align*}
$$

于是 Lagrange 方程给出
$$
 \dfrac{\mathrm{d}}{\mathrm{d}t} \dfrac{\partial L}{\partial \dot{q}}- \dfrac{\partial L}{\partial q}=0,
$$
$$
\ddot{q}-\omega _{0}^{2}q=g\cos \omega _0t.
$$

解得
$$
q=A\cosh \left( \omega _0t+\varphi \right) - \dfrac{g}{2\omega _{0}^{2}}\cos \omega _0t,
$$
代入初始条件得到
$$
q= \dfrac{g}{2\omega _{0}^{2}}\left( \cosh \omega _0t-\cos \omega _0t \right) .
$$


## L03.15
对方程
$$
 \dfrac{\mathrm{d}}{\mathrm{d}t} \dfrac{\partial L}{\partial \dot{q}}- \dfrac{\partial L}{\partial q}=Q^{\mathrm{ndiv}}+Q^{\mathrm{impulse}}
$$
两侧同时积分
$$
\left(  \dfrac{\partial L}{\partial \dot{q}} \right) _{\mathrm{end}}-\left(  \dfrac{\partial L}{\partial \dot{q}} \right) _{\mathrm{start}}-\int_{\mathrm{start}}^{\mathrm{end}}{ \dfrac{\partial L}{\partial q}\mathrm{d}t}=\int_{\mathrm{start}}^{\mathrm{end}}{Q^{\mathrm{ndiv}}\mathrm{d}t}+\int_{\mathrm{start}}^{\mathrm{end}}{Q^{\mathrm{impulse}}\mathrm{d}t},
$$
忽略高阶小得到
$$
\left(  \dfrac{\partial L}{\partial \dot{q}} \right) _{\mathrm{end}}-\left(  \dfrac{\partial L}{\partial \dot{q}} \right) _{\mathrm{start}}=\int_{\mathrm{start}}^{\mathrm{end}}{Q^{\mathrm{impulse}}\mathrm{d}t}=S.\qquad\left( t\rightarrow 0^+ \right) 
$$

### L03.03
设下落的距离为 $x$ 那么
$$
V=- \dfrac{1}{2}\lambda g\left( x+ \dfrac{l}{2} \right) ^2,\qquad T= \dfrac{1}{2}\lambda l\dot{x}^2,
$$
所以 $L= \dfrac{1}{2}\lambda l\dot{x}^2- \dfrac{1}{2}\lambda g\left( x+ \dfrac{l}{2} \right) ^2$, 根据 Lagrange 方程得到
$$
\ddot{x}- \dfrac{g}{l}x= \dfrac{l}{2},
$$
代入边界条件解得 $x= \dfrac{l}{2}\left( \cosh \sqrt{ \dfrac{g}{l}}t-1 \right)$, 那么完全下落的时候
$$
\cosh \sqrt{ \dfrac{g}{l}}t=2,
$$
所以 $\sinh \sqrt{ \dfrac{g}{l}}t=\sqrt{\cosh ^2\sqrt{ \dfrac{g}{l}}t-1}=\sqrt{3}$, 代入求导后的表达式得到
$$
\dot{x}= \dfrac{\sqrt{3}}{2}\sqrt{gl}.
$$

## L03.05
设 $\dot{\varphi}=\omega$, 系统的 Lagrange 量为
$$
L=T-V= \dfrac{1}{2}I\dot{\varphi}^2+ \dfrac{1}{2}m\left[ \left( R\dot{\theta} \right) ^2+\left( R\sin \theta \dot{\varphi} \right) ^2 \right] -mgR\cos \theta ,
$$
注意到表达式内不显含时间, 则 Hamilton 量是关于时间守恒的,
$$
H= \dfrac{\partial L}{\partial \dot{\varphi}}\dot{\varphi}+ \dfrac{\partial L}{\partial \dot{\theta}}\dot{\theta}-L= \dfrac{1}{2}I\dot{\varphi}^2+ \dfrac{1}{2}mR^2\dot{\theta}^2+ \dfrac{1}{2}mR^2\sin ^2\theta \dot{\varphi}^2+mgR\cos \theta = \dfrac{1}{2}I\omega _{0}^{2}+mgR,
$$
同时又注意到表达式内不显含 $\varphi$, 所以这是一个可遗坐标, 有
$$
 \dfrac{\partial L}{\partial \dot{\varphi}}=\left( I+mR^2\sin ^2\theta \right) \dot{\varphi}=I\omega _0,
$$
分别代入 $\theta = \dfrac{\pi}{2}, \pi$ 得到两个方程组
$$
\begin{align*}
&\begin{cases}
	\dfrac{1}{2}I\dot{\varphi}_{B}^{2}+\dfrac{1}{2}mR^2\dot{\theta}_{B}^{2}+\dfrac{1}{2}mR^2\dot{\varphi}_{B}^{2}=\dfrac{1}{2}I\omega _{0}^{2}+mgR,\\\\
	\left( I+mR^2 \right) \dot{\varphi}_B=I\omega _0,\\
\end{cases}
\\\\
&\begin{cases}
	\dfrac{1}{2}I\dot{\varphi}_{C}^{2}+\dfrac{1}{2}mR^2\dot{\theta}_{C}^{2}-mgR=\dfrac{1}{2}I\omega _{0}^{2}+mgR,\\\\
	I \dot{\varphi}_C=I\omega _0.\\
\end{cases}
\end{align*}
$$
解得
$$
\begin{align*}
&\begin{cases}
	\dot{\varphi}_B=\dfrac{I\omega _0}{I+mR^2},\\\\
	v_B=\sqrt{\left( R\dot{\theta}_B \right) ^2+\left( R\dot{\varphi}_B \right) ^2}=R\sqrt{\dfrac{2g}{R}+\dfrac{I\omega _{0}^{2}}{I+mR^2}+\dfrac{I^2\omega _{0}^{2}}{\left( I+mR^2 \right) ^2}},\\
\end{cases}
\\\\
&\begin{cases}
	\dot{\varphi}_C=\omega _0,\\\\
	v_C=R\dot{\theta}_C=2\sqrt{gR}.\\
\end{cases}
\end{align*}
$$

> 为什么 $v_B>\sqrt{2gR}$ ?

圆环还要被轨道拽这走, 获得了一个横向的速度, 也就是轨道的侧面都圆环有正功.

## L03.14
用球坐标表示, 但是天顶角的极轴改为朝下, 得到
$$
L= \dfrac{1}{2}mR^2\dot{\varphi}^2+ \dfrac{1}{2}mR^2\sin ^2\varphi \dot{\theta}^2+mgR\cos \varphi ,
$$
注意到表达式中不显含时间, 则关于 Hamilton 量守恒, 又注意到表达式中不显含 $\theta$, 则关于该坐标的广义动量守恒,
$$
\begin{cases}
	H=\dfrac{1}{2}mR^2\dot{\varphi}^2+\dfrac{1}{2}mR^2\sin ^2\varphi \dot{\theta}^2-mgR\cos \varphi ,\\\\
	J=\dfrac{\partial L}{\partial \dot{\theta}}=mR^2\sin ^2\varphi \dot{\theta},\\
\end{cases}
$$
联立两式可以消除 $\dot{\theta}$, 得到
$$
t=\int_0^t{\mathrm{d}t}=\int_{\varphi _0}^{\varphi}{\sqrt{ \dfrac{m^2R^4\left( 1-\cos ^2\varphi \right)}{2m^2gR^3\cos ^3\varphi +2mR^2H\cos ^2\varphi -2m^2gR^3\cos \varphi -2mR^2H+J}}}\mathrm{d}\varphi,
$$
$$
\theta =\theta _0+\int_0^t{ \dfrac{J}{mR^2\sin ^2\varphi}\mathrm{d}t}.
$$
