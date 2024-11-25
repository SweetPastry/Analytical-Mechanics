@import "../style.less"

# 经典力学第六次作业

## L07.05

根据几何关系得到
$$
\left( \begin{array}{c}
 x\\
 y\\
\end{array} \right) =\left( \begin{matrix}
 \cos \omega t&  -\sin \omega t\\
 \sin \omega t&  \cos \omega t\\
\end{matrix} \right) \left( \begin{array}{c}
 x^{\prime}\\
 y^{\prime}\\
\end{array} \right) ,
$$
两边同时求导数
$$
\left( \begin{array}{c}
 \dot{x}\\
 \dot{y}\\
\end{array} \right) =\left( \begin{matrix}
 \cos \omega t&  -\sin \omega t\\
 \sin \omega t&  \cos \omega t\\
\end{matrix} \right) \left( \begin{array}{c}
 \dot{x}^{\prime}\\
 \dot{y}^{\prime}\\
\end{array} \right) -\omega \left( \begin{matrix}
 \sin \omega t&  \cos \omega t\\
 -\cos \omega t&  \sin \omega t\\
\end{matrix} \right) \left( \begin{array}{c}
 x^{\prime}\\
 y^{\prime}\\
\end{array} \right) ,
$$
于是
$$
\dot{x}^2+\dot{y}^2=\left( \dot{x}\quad \dot{y} \right) \left( \begin{array}{c}
 \dot{x}\\
 \dot{y}\\
\end{array} \right) =\left( \dot{x}^2+\dot{y}^2 \right) +\omega ^2\left( {x^{\prime}}^2+{y^{\prime}}^2 \right) +2\omega \left( x^{\prime}\dot{y}^{\prime}-\dot{x}^{\prime}y^{\prime} \right) .
$$

在 $Oxyz$ 系中, Lagrange 量写作
$$
L= \dfrac{1}{2}m\left( \dot{x}^2+\dot{y}^2+\dot{z}^2 \right) -V\left( \boldsymbol{r} \right),
$$
直接代入相关表达式就得到 $Ox'y'z'$ 系的 Lagrange 量
$$
L^{\prime}= \dfrac{1}{2}m\left[ \left( {\dot{x}^{\prime}}^2+{\dot{y}^{\prime}}^2+{\dot{z}^{\prime}}^2 \right) +\omega ^2\left( {x^{\prime}}^2+{y^{\prime}}^2 \right) +2\omega \left( x^{\prime}\dot{y}^{\prime}-\dot{x}^{\prime}y^{\prime} \right) \right] -V\left( \boldsymbol{r}^{\prime} \right) ,
$$
据此求得广义动量
$$
\begin{cases}
 p_{x^{\prime}}=\dfrac{\partial L^{\prime}}{\partial x^{\prime}}=m\left( \dot{x}^{\prime}-\omega y^{\prime} \right),\\
 p_{y^{\prime}}=\dfrac{\partial L^{\prime}}{\partial y^{\prime}}=m\left( \dot{y}^{\prime}+\omega x^{\prime} \right),\\
 p_{z^{\prime}}=\dfrac{\partial L^{\prime}}{\partial z^{\prime}}=m\dot{z},\\
\end{cases}
$$
反解广义速度
$$
\begin{cases}
 \dot{x}^{\prime}=\dfrac{p_{x^{\prime}}}{m}+\omega y^{\prime},\\
 \dot{y}^{\prime}=\dfrac{p_{y^{\prime}}}{m}-\omega x^{\prime},\\
 \dot{z}=\dfrac{p_{z^{\prime}}}{m},\\
\end{cases}
$$
对 Lagrange 量做 Legendre 变化得到广义能量函数, 并替换所有的广义速度为广义动量
$$
H^{\prime}=\dot{x}^{\prime}p_{x^{\prime}}+\dot{y}^{\prime}p_{y^{\prime}}+\dot{z}^{\prime}p_{z^{\prime}}-L= \dfrac{p_{x^{\prime}}^{2}+p_{y^{\prime}}^{2}+p_{z^{\prime}}^{2}}{2m}+\omega \left( y^{\prime}{p_x}^{\prime}-x^{\prime}p_{y^{\prime}} \right) +V\left( \boldsymbol{r}^{\prime} \right) .
$$

## L07.09

### (1)

依照题意, 可以归纳出
$$
\boldsymbol{J}=\boldsymbol{r}\times \boldsymbol{p},\qquad \boldsymbol{K}=\boldsymbol{p}\times \boldsymbol{J}+mV\left( \boldsymbol{r} \right) \boldsymbol{r}.
$$

由于 $\boldsymbol{J}$ 的方向沿着 $z$ 轴但是表达式中不含 $z$, $p_z$ 于是
$$
\left[ \boldsymbol{J},H \right] =\partial _{\boldsymbol{r}}\boldsymbol{J}\partial _{\boldsymbol{p}}H-\partial _{\boldsymbol{p}}\boldsymbol{J}\partial _{\boldsymbol{r}}H=\dot{\boldsymbol{r}}\cdot \partial _{\boldsymbol{r}}\boldsymbol{J}-\dot{\boldsymbol{p}}\cdot \partial _{\boldsymbol{p}}\boldsymbol{J}
\\
=\dot{z}\partial _zJ_z-\dot{p}_z\partial _{p_z}J_z=0.
$$
$$
\left[ \boldsymbol{K},H \right] =\partial _{\boldsymbol{r}}\boldsymbol{K}\partial _{\boldsymbol{p}}H-\partial _{\boldsymbol{p}}\boldsymbol{K}\partial _{\boldsymbol{r}}H=\dot{\boldsymbol{r}}\partial _{\boldsymbol{r}}\boldsymbol{K}-\dot{\boldsymbol{p}}\partial _{\boldsymbol{p}}\boldsymbol{K}
\\
=\dot{\boldsymbol{r}}\left( V\left( \boldsymbol{r} \right) +\boldsymbol{r}\cdot \nabla V\left( \boldsymbol{r} \right) \right) =\dot{\boldsymbol{r}}\left( - \dfrac{k}{r}+\boldsymbol{r}\cdot  \dfrac{k}{r^2}\hat{r} \right) =0.
$$
这就得证了.

### (2) {#2}

采用矩阵求导的方法, 这样做可以完整地表现各个向量之间的关系.
$$
\begin{align*}
\left[ \boldsymbol{K},\boldsymbol{J} \right] &=\partial _{\boldsymbol{r}}\boldsymbol{K}\left( \partial _{\boldsymbol{p}}\boldsymbol{J} \right) ^{\mathrm{T}}-\partial _{\boldsymbol{p}}\boldsymbol{K}\left( \partial _{\boldsymbol{r}}\boldsymbol{J} \right) ^{\mathrm{T}}
\\
&=\left( \begin{matrix}
 - \dfrac{mk}{r}+ \dfrac{mkx^2}{r^3}&   \dfrac{mkxy}{r^3}&   \dfrac{mkxz}{r^3}\\
  \dfrac{mkxy}{r^3}&  - \dfrac{mk}{r}+ \dfrac{mky^2}{r^3}&   \dfrac{mkyz}{r^3}\\
 0&  0&  0\\
\end{matrix} \right) \left( \begin{matrix}
 0&  0&  -y\\
 0&  0&  x\\
 0&  0&  0\\
\end{matrix} \right) -\left( \begin{matrix}
 0&  J&  0\\
 -J&  0&  0\\
 0&  0&  0\\
\end{matrix} \right) \left( \begin{matrix}
 0&  0&  p_y\\
 0&  0&  -p_x\\
 0&  0&  0\\
\end{matrix} \right)
\\
&=\left( \begin{matrix}
 0&  0&   \dfrac{mky}{r}\\
 0&  0&  - \dfrac{mkx}{r}\\
 0&  0&  0\\
\end{matrix} \right) -\left( \begin{matrix}
 0&  0&  -p_xJ\\
 0&  0&  -p_yJ\\
 0&  0&  0\\
\end{matrix} \right)
\\
&=\left( \begin{matrix}
 0&  0&  -K_y\\
 0&  0&  K_x\\
 0&  0&  0\\
\end{matrix} \right) .
\end{align*}
$$

接下来是最后一个关系的证明,
$$
\begin{align*}
\left[ K_x,K_y \right] &=\partial _{\boldsymbol{r}}K_x\left( \partial _{\boldsymbol{p}}K_y \right) ^{\mathrm{T}}-\partial _{\boldsymbol{p}}K_x\left( \partial _{\boldsymbol{r}}K_y \right) ^{\mathrm{T}}
\\
&=\left( p_{y}^{2}- \dfrac{mk}{r}+ \dfrac{mkx^2}{r^3},-p_xp_y+ \dfrac{mkxy}{r^3}, \dfrac{mkxz}{r} \right) \left( \begin{array}{c}
 -xp_y+2yp_x\\
 -xp_x\\
 0\\
\end{array} \right) -\left( -yp_y,2xp_y-yp_x,0 \right) \left( \begin{array}{c}
 -p_xp_y+ \dfrac{mkxy}{r^3}\\
 p_{x}^{2}- \dfrac{mk}{r}+ \dfrac{mky^2}{r^3}\\
  \dfrac{mky^2}{r^3}\\
\end{array} \right)
\\
&=\left( yp_x-xp_y \right) \left[ \left( p_{x}^{2}+p_{y}^{2} \right) - \dfrac{2mk}{r} \right]
\\
&=-\left( 2mH \right) J.
\end{align*}
$$

复刻这个手法, 在 Poinsson 括号内放入两个角动量矢量,
$$
\begin{align*}
\left[ \boldsymbol{J},\boldsymbol{J} \right] &=\partial _{\boldsymbol{r}}\boldsymbol{J}\left( \partial _{\boldsymbol{p}}\boldsymbol{J} \right) ^{\mathrm{T}}-\partial _{\boldsymbol{p}}\boldsymbol{J}\left( \partial _{\boldsymbol{r}}\boldsymbol{J} \right) ^{\mathrm{T}}
\\
&=\left( \begin{matrix}
 0&  p_z&  -p_y\\
 -p_y&  0&  p_x\\
 p_y&  -p_x&  0\\
\end{matrix} \right) \left( \begin{matrix}
 0&  z&  -y\\
 -z&  0&  x\\
 y&  -x&  0\\
\end{matrix} \right) -\left( \begin{matrix}
 0&  -z&  y\\
 z&  0&  -x\\
 -y&  x&  0\\
\end{matrix} \right) \left( \begin{matrix}
 0&  -p_z&  p_y\\
 p_y&  0&  -p_x\\
 -p_y&  p_x&  0\\
\end{matrix} \right)
\\
&=\left( \begin{matrix}
 0&  J_z&  -J_y\\
 -J_z&  0&  J_x\\
 J_y&  -J_x&  0\\
\end{matrix} \right) .
\end{align*}
$$

如果记 $M_i=K_x/\sqrt{2m\left| E \right|},K_y/\sqrt{2m\left| E \right|},J$, $i=1,2,3$ 对应 $x,y,z$, 那么根据之前的结论
$$
\left[ M_1,M_2 \right] = \dfrac{1}{-2mH}\left[ K_x,K_y \right] =J=M_3,
$$
$$
\left[ M_2,M_3 \right] = \dfrac{1}{\sqrt{2m\left| E \right|}}\left[ K_y,J \right] = \dfrac{K_x}{\sqrt{2m\left| E \right|}}=M_1,
$$
$$
\left[ M_3,M_1 \right] =- \dfrac{1}{\sqrt{2m\left| E \right|}}\left[ K_x,J \right] = \dfrac{K_y}{\sqrt{2m\left| E \right|}}=M_2.
$$
\end{align*}
$$

### (3) {#3}

直接计算,
$$
\begin{align*}
M_{1}^{2}+M_{2}^{2}+M_{3}^{2}&= \dfrac{1}{-2mH}\left( K_{x}^{2}+K_{y}^{2}-2mHJ^2 \right)
\\
&= \dfrac{1}{-2mH}\left[ \left( p_yJ- \dfrac{mkx}{r} \right) ^2+\left( -p_xJ- \dfrac{mky}{r} \right) ^2-2mHJ^2 \right]
\\
&= \dfrac{mk^2}{2\left| E \right|}.
\end{align*}
$$

## J04.05
### (a)
The generalized momentum $p_k$ is derived by formula $p_k= \dfrac{\partial L}{\partial \dot{q}_k}$, so
$$
\begin{align*}
p_1&=2a\dot{q}_1+2b\dot{q}_2,
\\
p_2&=2b\dot{q}_1+2c\dot{q}_2.
\end{align*}
$$
And write them as form of matrix,
$$
\left( \begin{array}{c}
 p_1\\
 p_2\\
\end{array} \right) =2\left( \begin{matrix}
 a&  b\\
 b&  c\\
\end{matrix} \right) \left( \begin{array}{c}
 \dot{q}_1\\
 \dot{q}_2\\
\end{array} \right) ,
$$
so
$$
\left( \begin{array}{c}
 \dot{q}_1\\
 \dot{q}_2\\
\end{array} \right) = \dfrac{1}{2} \dfrac{1}{ac-b^2}\left( \begin{matrix}
 c&  -b\\
 -b&  a\\
\end{matrix} \right) \left( \begin{array}{c}
 p_1\\
 p_2\\
\end{array} \right) .
$$
That is
$$
\begin{align*}
\dot{q}_1&= \dfrac{cp_1-bp_2}{2\left( ac-b^2 \right)},
\\
\dot{q}_2&= \dfrac{-bp_1+ap_2}{2\left( ac-b^2 \right)}.
\end{align*}
$$

### (b)
The $H$ is the $L$'s Legendre transformation, so
$$
H=p_1\dot{q}_1+p_2\dot{q}_2-L=a\dot{q}_{1}^{2}+2b\dot{q}_1\dot{q}_2+c\dot{q}_{2}^{2}-f.
$$

Subsitute the $\dot{q}$ with $p$, and we have
$$
H= \dfrac{1}{4\left( ac-b^2 \right)}\left( cp_{1}^{2}-2bp_1p_2+ap_{2}^{2} \right) .
$$

### (c)
Take it into Hamilton's equation,
$$
\dot{q}_1= \dfrac{\partial H}{\partial p_1}= \dfrac{cp_1-bp_2}{2\left( ac-b^2 \right)},\qquad \dot{q}_2= \dfrac{\partial H}{\partial p_2}= \dfrac{-bp_1+ap_2}{2\left( ac-b^2 \right)}.
$$
So we verified that!

### (d)
Just like in Lagrange's Mechanics that the $\dot{q}$ is independent from $t$ and $q$, here, in Hamilton's Mechanics we subsitute $\dot{q}$ with $p$, and naturally the $p$ is independent.

## J04.10
### (a)
Use only one step $\left[ f,p \right] =\partial _qf\partial _pp-\partial _pf\partial _qp=\partial _qf$ and QED.

Detailly, the $q$ is a vector here, and with $\partial _pp=1$, $\partial _qp=0$, so
$$
\left[ f,p \right] =\partial _qf=\left( \partial_xf\quad \partial _yf\quad \partial_zf \right) ^{\mathrm{T}}.
$$

### (b)
Just like what we do above, we do again,
$$
\begin{align*}
\left[ L_z,q \right] &=\partial _qL_z\partial _pq-\partial_pL_z\partial_qq=-\partial _pL_z=-\left( \partial _{p_x}\quad \partial _{p_y}\quad \partial _{p_z} \right) ^{\mathrm{T}}\left( xp_y-yp_x \right)
\\
&=\left( y\quad -x\quad 0 \right) ^{\mathrm{T}},
\end{align*}
$$
$$
\begin{align*}
\left[ L_z,p \right] &=\partial _qL_z\partial _pp-\partial_pL_z\partial_qp=\partial _qL_z=\left( \partial _x\quad \partial_y\quad \partial _z \right) ^{\mathrm{T}}\left( xp_y-yp_x \right)
\\
&=\left( p_y\quad -p_x\quad 0 \right) ^{\mathrm{T}}.
\end{align*}
$$

## J04.12
### (a)
Subsitute instinctly,
$$
\begin{align*}
&\left[ Q_k,Q_l \right] =\left[ p_k,p_l \right] =0,
\\
&\left[ Q_k,P_l \right] =\left[ p_k,-q_l \right] =\left[ q_l,p_k \right] =\delta _{kl},
\\
&\left[ P_k,P_l \right] =\left[ -q_k,-q_l \right] =0.
\end{align*}
$$

### (b)
Subsitute instinctly,
$$
H\left( P,Q,t \right) = \dfrac{X^2+Y^2+Z^2}{2m}+U\left( -P_X,-P_Y,-P_Z,t \right) .
$$

### (c)
In $q,p$ system,
$$
\dot{q}= \dfrac{\partial H}{\partial p}= \dfrac{p}{m},\quad \dot{p}=- \dfrac{\partial H}{\partial q}=-\nabla _qU,\quad \dot{H}= \dfrac{\partial H}{\partial t}=\dot{U}.
$$
In $Q,P$ system,
$$
\dot{Q}= \dfrac{\partial H}{\partial P}=\nabla _PU,\quad \dot{P}=- \dfrac{\partial H}{\partial Q}=- \dfrac{Q}{m},\quad \dot{H}= \dfrac{\partial H}{\partial t}=\dot{U}.
$$
And noticed,
$$
\dot{p}=-\nabla _qU,\quad -\dot{q}=- \dfrac{p}{m},
$$
so the equation formation is equivalent in this transformation.
