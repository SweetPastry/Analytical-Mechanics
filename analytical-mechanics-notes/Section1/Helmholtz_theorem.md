# Helmholtz 定理 (Helmholtz 分解)

## 我想说的
Helmholtz 定理是向量微积分、多元微积分以及场论等领域的基本定理, 定理的启发来自于物理学, 证明后被用于物理学研究. 其证明过程主要符号化运用了的场论算符 $\nabla$, 使得过程看上去直接明了, 但是却有点费解. 欣赏这个定理的论述过程可以深刻感悟科学史上数学和物理相互推动对方发展的佳话.

## 陈述
设 $\boldsymbol{F}$ 是定义在有界区域 $V\subseteq \mathbb{R} ^3$ 上的二阶连续可微, 则 $\boldsymbol{F}$ 可以被分解为无旋度和无散度两部分:

$$
\boldsymbol{F}=-\nabla \varPhi + \nabla \times \boldsymbol{A}.
$$

$\varPhi$ 和 $\boldsymbol{A}$ 分别被称为向量场 $\boldsymbol{F}$ 的**纯量势**和**矢量势**. 可以写作

$$
\begin{align*}
\varPhi \left( \boldsymbol{r} \right) &=\frac{1}{4\pi}\left( \int_V{\frac{\nabla ^{\prime}\cdot \boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V-\oint_{\partial V}{\frac{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\cdot \mathrm{d}\boldsymbol{S}}} \right) ,
\\\\
\boldsymbol{A}\left( \boldsymbol{r} \right) &=\frac{1}{4\pi}\left( \int_V{\frac{\nabla ^{\prime}\times \boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V-\oint_{\partial V}{\mathrm{d}\boldsymbol{S}\times \frac{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}}} \right) .
\end{align*}
$$

## 证明
### 引理
> 三维 dirac delta 函数可以写作:
> $$\delta ^3\left( \boldsymbol{r}-\boldsymbol{r}^{\prime} \right) =-\frac{1}{4\pi}\nabla ^2\frac{1}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}.$$

引理的证明需要借助一些物理直觉, 引入 Coulomb 势函数:

$$
\phi =\frac{1}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}.
$$

此处需要一点点高等数学知识, 通过 Lame 系数可以快速写出球坐标下的 Laplace 算符:

$$
\begin{align*}
\nabla ^2&=\frac{1}{H_rH_{\varphi}H_{\theta}}\left( \sum_{i\in \left\{ r,\varphi ,\theta \right\}}^{\,\,}{\frac{\partial}{\partial i}\left( \frac{H_rH_{\varphi}H_{\theta}}{H_{i}^{2}}\frac{\partial}{\partial i} \right)} \right) 
\\\\
&=\frac{1}{H_rH_{\varphi}H_{\theta}}\left( \frac{\partial}{\partial r}\left( \frac{H_{\varphi}H_{\theta}}{H_r}\frac{\partial}{\partial r} \right) +\frac{\partial}{\partial \varphi}\left( \frac{H_rH_{\theta}}{H_{\varphi}}\frac{\partial}{\partial \varphi} \right) +\frac{\partial}{\partial \theta}\left( \frac{H_rH_{\varphi}}{H_{\theta}}\frac{\partial}{\partial \theta} \right) \right) 
\\\\
&=\frac{1}{r^2\sin \varphi}\left( \frac{\partial}{\partial r}\left( r^2\sin \varphi \frac{\partial}{\partial r} \right) +\frac{\partial}{\partial \varphi}\left( \sin \varphi \frac{\partial}{\partial \varphi} \right) +\frac{\partial}{\partial \theta}\left( \frac{1}{\sin \varphi}\frac{\partial}{\partial \theta} \right) \right) 
\\\\
&=\frac{1}{r^2}\frac{\partial}{\partial r}\left( r^2\frac{\partial}{\partial r} \right) +\frac{1}{r^2\sin \varphi}\frac{\partial}{\partial \varphi}\left( \sin \varphi \frac{\partial}{\partial \varphi} \right) +\frac{1}{r^2\sin ^2\varphi}\frac{\partial ^2}{\partial \theta ^2}.
\end{align*}
$$

立刻得到

$$
\nabla^2 \phi = 0.\qquad (\boldsymbol{r}\ne\boldsymbol{r}^\prime)
$$

接下来模仿一道经典多元微积分习题, 对 $\nabla^2 \phi$ 做区域上的积分

$$
\int_V{\nabla ^2\phi \mathrm{d}V=}\oint_{\partial V}{\nabla \phi \cdot \mathrm{d}\boldsymbol{S}=-4\pi}.
$$

根据 dirac delta 函数的定义

$$
\int_V{\frac{1}{4\pi}\nabla ^2\phi \mathrm{d}V=}-1=-\int_V{\delta ^3\left( \boldsymbol{r}-\boldsymbol{r}^{\prime} \right) \mathrm{d}V}
$$

注意, 此处的区域 $V$ 不一定是前文给定的区域, 而是任意包含原点的封闭有界区域, 所以

$$
\delta ^3\left( \boldsymbol{r}-\boldsymbol{r}^{\prime} \right) =-\frac{1}{4\pi}\nabla ^2\phi .
$$

### 定理的证明
根据引理, 得到

$$
\begin{align*}
\boldsymbol{F}\left( \boldsymbol{r} \right) &=\int_V{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right) \delta ^3\left( \boldsymbol{r}-\boldsymbol{r}^{\prime} \right) \mathrm{d}V}
\\\\
&=-\int_V{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right) \frac{1}{4\pi}\nabla ^2\frac{1}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V}
\\\\
&=-\frac{1}{4\pi}\nabla ^2\int_V{\frac{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V}
\\\\
&=-\frac{1}{4\pi}\left( \nabla \left( \nabla \cdot \int_V{\frac{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V} \right) -\nabla \times \left( \nabla \times \int_V{\frac{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V} \right) \right) \qquad \left( \nabla ^2\boldsymbol{f}=\nabla \left( \nabla \cdot \boldsymbol{f} \right) -\nabla \times \left( \nabla \times \boldsymbol{f} \right) \right) 
\\\\
&=-\frac{1}{4\pi}\left( \nabla \left( \int_V{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right) \nabla \cdot \frac{1}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V} \right) -\nabla \times \left( \int_V{\nabla \times \frac{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V} \right) \right) 
\\\\
&=-\frac{1}{4\pi}\left( \nabla \left( -\int_V{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right) \nabla ^{\prime}\cdot \frac{1}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V} \right) -\nabla \times \left( \int_V{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right) \times \nabla ^{\prime}\frac{1}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V} \right) \right) 
\\\\
&=\frac{1}{4\pi}\left( \nabla \left( \int_V{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right) \nabla ^{\prime}\cdot \frac{1}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V} \right) +\nabla \times \left( \int_V{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right) \times \nabla \frac{1}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V} \right) \right) 
\\\\
&=\frac{1}{4\pi}\left( \begin{array}{c}\displaystyle
	\nabla \left( \int_V{\nabla ^{\prime}\cdot \frac{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V-\int_V{\frac{\nabla ^{\prime}\cdot \boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V}} \right)\\
	\displaystyle+\nabla \times \left( -\int_V{\nabla ^{\prime}\times \frac{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V+\int_V{\frac{\nabla ^{\prime}\times \boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V}} \right)\\
\end{array} \right) \qquad \left( \begin{array}{c}
	\displaystyle\boldsymbol{A}\cdot \nabla B=-B\cdot \nabla \boldsymbol{A}+\nabla \left( \boldsymbol{A}B \right)\\
	\displaystyle\boldsymbol{A}\times \nabla B=B\nabla \times \boldsymbol{A}-\nabla \times \left( \boldsymbol{A}B \right)\\
\end{array} \right) 
\\\\
&=\frac{1}{4\pi}\left( \begin{array}{c}\displaystyle
	\nabla \left( \oint_{\partial V}{\frac{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}\boldsymbol{S}-\int_V{\frac{\nabla ^{\prime}\cdot \boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V}} \right)\\
	\displaystyle+\nabla \times \left( -\oint_{\partial V}{\mathrm{d}\boldsymbol{S}\times \frac{\boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}}+\int_V{\frac{\nabla ^{\prime}\times \boldsymbol{F}\left( \boldsymbol{r}^{\prime} \right)}{\left| \boldsymbol{r}-\boldsymbol{r}^{\prime} \right|}\mathrm{d}V} \right)\\
\end{array} \right) \qquad \left( \begin{array}{c}
	\displaystyle\int_V{\nabla \boldsymbol{f}\mathrm{d}V=\oint_{\partial V}{\boldsymbol{f}\cdot \mathrm{d}\boldsymbol{S}}}\\
	\displaystyle\int_V{\nabla \times \boldsymbol{f}\mathrm{d}V=\oint_{\partial V}{\mathrm{d}\boldsymbol{S}\times \boldsymbol{f}}}\\
\end{array} \right) 
\\\\
&=-\nabla \varPhi +\nabla \times \boldsymbol{A}.
\end{align*}
$$

## 结语
事实上, 虽然推导过程中使用的诸多符号看上去十分瘆人, 但是若耐心看下来发现使用的都是朴实无华的微积分定理, 并没有使用什么非常炫酷的技巧. 这个定理也解释了一些现实物理意义.