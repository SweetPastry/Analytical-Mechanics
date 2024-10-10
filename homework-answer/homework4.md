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
L=T-V&=\frac{1}{2}m\left( R-r \right) ^2\dot{\theta}^2+\frac{1}{2}\frac{1}{2}mr^2\dot{\varphi}^2-mg\left( R-r \right) \left( 1-\cos \theta \right) 
\\
&=\frac{3}{4}m\left( R-r \right) ^2\dot{\theta}^2-mg\left( R-r \right) \left( 1-\cos \theta \right). 
\end{align*}
$$

根据 Lagrange 方程 $\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{\theta}}-\dfrac{\partial L}{\partial \theta}=0$ 并利用小角度近似 $\sin \theta \sim \theta$ 得到
$$
\frac{3}{2}m\left( R-r \right) ^2\ddot{\theta}+mg\left( R-r \right) \theta =0，
$$
是一个简谐运动方程,
$$
\omega _{0}^{2}=\frac{mg\left( R-r \right)}{\frac{3}{2}m\left( R-r \right) ^2}=\frac{2}{3}\frac{g}{\left( R-r \right)},
$$

$$
T=\frac{2\pi}{\omega _0}=\pi \sqrt{\frac{6\left( R-r \right)}{g}}.
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
L&=T-V=\frac{1}{2}m\left( \dot{x}^2+\dot{y}^2 \right) -mgy
\\
&=\frac{1}{2}m\omega _{0}^{2}\left( D^2+q^2 \right) +\frac{1}{2}m\dot{q}^2-m\omega _0D\dot{q}+mgq\cos \omega _0t-mgD\sin \omega _0t.
\end{align*}
$$

于是 Lagrange 方程给出
$$
\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial \dot{q}}-\frac{\partial L}{\partial q}=0,
$$
$$
\ddot{q}-\omega _{0}^{2}q=g\cos \omega _0t.
$$

解得
$$
q=A\cosh \left( \omega _0t+\varphi \right) -\frac{g}{2\omega _{0}^{2}}\cos \omega _0t,
$$
代入初始条件得到
$$
q=\frac{g}{2\omega _{0}^{2}}\left( \cosh \omega _0t-\cos \omega _0t \right) .
$$


## L03.15
对方程
$$
\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial \dot{q}}-\frac{\partial L}{\partial q}=Q^{\mathrm{ndiv}}+Q^{\mathrm{impulse}}
$$
两侧同时积分
$$
\left( \frac{\partial L}{\partial \dot{q}} \right) _{\mathrm{end}}-\left( \frac{\partial L}{\partial \dot{q}} \right) _{\mathrm{start}}-\int_{\mathrm{start}}^{\mathrm{end}}{\frac{\partial L}{\partial q}\mathrm{d}t}=\int_{\mathrm{start}}^{\mathrm{end}}{Q^{\mathrm{ndiv}}\mathrm{d}t}+\int_{\mathrm{start}}^{\mathrm{end}}{Q^{\mathrm{impulse}}\mathrm{d}t},
$$
忽略高阶小得到
$$
\left( \frac{\partial L}{\partial \dot{q}} \right) _{\mathrm{end}}-\left( \frac{\partial L}{\partial \dot{q}} \right) _{\mathrm{start}}=\int_{\mathrm{start}}^{\mathrm{end}}{Q^{\mathrm{impulse}}\mathrm{d}t}=S.\qquad\left( t\rightarrow 0^+ \right) 
$$

### L03.03
设下落的距离为 $x$ 那么
$$
V=-\frac{1}{2}\lambda g\left( x+\frac{l}{2} \right) ^2,\qquad T=\frac{1}{2}\lambda l\dot{x}^2,
$$
所以 $L=\frac{1}{2}\lambda l\dot{x}^2-\frac{1}{2}\lambda g\left( x+\frac{l}{2} \right) ^2$, 根据 Lagrange 方程得到
$$
\ddot{x}-\frac{g}{l}x=\frac{l}{2},
$$
代入边界条件解得 $x=\frac{l}{2}\left( \cosh \sqrt{\frac{g}{l}}t-1 \right)$, 那么完全下落的时候
$$
\cosh \sqrt{\frac{g}{l}}t=2,
$$
所以 $\sinh \sqrt{\frac{g}{l}}t=\sqrt{\cosh ^2\sqrt{\frac{g}{l}}t-1}=\sqrt{3}$, 代入求导后的表达式得到
$$
\dot{x}=\frac{\sqrt{3}}{2}\sqrt{gl}.
$$