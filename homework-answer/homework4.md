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

根据 Lagrange 方程 $\dfrac{\mathrm{d}}{\mathrm{d}t}\dfrac{\partial L}{\partial \dot{\theta}}-\dfrac{\partial L}{\partial \theta}=0$ 得到
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

