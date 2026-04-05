// ═══════════════════════════════════════════════════════════════
// QUANT DEV TRACKER - Main Application
// ═══════════════════════════════════════════════════════════════

console.log('[QDT] Quant Dev Tracker initializing...');

const PH = [
  {
    id:1, sh:"Math foundations", nm:"Mathematical foundations",
    mo:"Months 1–4", col:"#4a8ed4", start:1, dur:4,
    ds:"Non-negotiable base layer. Implement every concept in Python as you study it — the dual track cements theory faster.",
    topics:[
      "Linear algebra — vectors, matrices, transforms",
      "Eigendecomposition & SVD",
      "PCA — theory and implementation",
      "Multivariate calculus",
      "Gradient, Hessian and Jacobian",
      "Constrained optimisation — Lagrangian",
      "Probability theory & random variables",
      "Distributions: Normal, Poisson, Chi-squared",
      "MLE and MAP estimation",
      "Bayesian inference & conjugate priors",
      "Hypothesis testing: t-test, chi-sq, KS",
      "Linear and logistic regression"
    ],
    milestone:"Derive eigendecompositions from scratch; solve unconstrained and constrained optimisation problems by hand without references.",
    leverage:"Your MSc algorithms & DS foundation — discrete math and complexity analysis transfer directly. Use NumPy to verify every matrix operation computationally as you go.",
    res:[
      "Mathematics for Machine Learning — Deisenroth (free PDF)",
      "Introduction to Probability — Blitzstein & Hwang",
      "All of Statistics — Wasserman",
      "3Blue1Brown — Essence of Linear Algebra (YouTube)",
      "MIT 18.650 Statistics for Applications (OCW)"
    ]
  },
  {
    id:2, sh:"Stochastic calculus", nm:"Stochastic calculus & financial math",
    mo:"Months 3–7", col:"#c8a148", start:3, dur:5,
    ds:"The language of derivatives pricing. Simulate Brownian paths in Python first to build physical intuition, then work through the formal theory.",
    topics:[
      "Brownian motion & Wiener process",
      "Quadratic variation",
      "Itô's lemma — 1D and multi-dimensional",
      "Stochastic differential equations (SDEs)",
      "Geometric Brownian Motion (GBM)",
      "Risk-neutral measure (Q-measure)",
      "Girsanov's theorem",
      "Martingales & the tower property",
      "Feynman-Kac formula",
      "Change of numeraire",
      "First and second fundamental theorems",
      "Jump processes: Poisson, Lévy basics"
    ],
    milestone:"Derive the Black-Scholes PDE from first principles using Itô's lemma. If you can do this cleanly on a whiteboard, you pass the entry interview bar.",
    leverage:"Java multithreading intuition helps — a Wiener process is like a thread whose state evolves non-deterministically at each timestep. The probabilistic reasoning transfers.",
    res:[
      "Paul Wilmott Introduces Quantitative Finance (Vol 1)",
      "Elementary Stochastic Calculus — Mikosch",
      "Stochastic Calculus for Finance I & II — Shreve",
      "Brownian Motion and Stochastic Calculus — Karatzas"
    ]
  },
  {
    id:3, sh:"Financial theory", nm:"Financial instruments & theory",
    mo:"Months 5–9", col:"#50c777", start:5, dur:5,
    ds:"Domain knowledge layer — what you'll actually price, hedge, and risk-manage. Price real instruments with real data, not textbook examples.",
    topics:[
      "Options: calls, puts, payoff diagrams",
      "Black-Scholes formula & PDE derivation",
      "Greeks: delta, gamma, vega, theta, rho",
      "Implied volatility & the volatility surface",
      "Futures, forwards & no-arbitrage pricing",
      "Interest rate swaps & OIS discounting",
      "Fixed income: bond pricing, YTM",
      "Duration, convexity & DV01",
      "Yield curve construction & bootstrapping",
      "CAPM & the efficient frontier (MPT)",
      "Fama-French 3-factor model",
      "VaR, CVaR & stress testing",
      "Market microstructure & order flow"
    ],
    milestone:"Price a real option from Yahoo Finance data using Black-Scholes; compute all Greeks and compare to the market-observed implied vol surface.",
    leverage:"Morningstar data analyst experience — ISIN structures, NAV calculations, and messy real financial data are second nature to you. A genuine edge over pure CS candidates.",
    res:[
      "Options, Futures & Other Derivatives — Hull (the bible)",
      "Fixed Income Mathematics — Fabozzi",
      "Active Portfolio Management — Grinold & Kahn",
      "QuantLib-Python documentation (quantlib.org)"
    ]
  },
  {
    id:4, sh:"Python quant stack", nm:"Python quant stack",
    mo:"Months 2–8 (parallel)", col:"#d4a030", start:2, dur:7,
    ds:"Run in parallel with phases 1–3. Rule: every concept you learn must become working Python code within 48 hours.",
    topics:[
      "NumPy: vectorisation, broadcasting, einsum",
      "Pandas: time series, resampling, multi-index",
      "SciPy: optimisation, integration, statistics",
      "Statsmodels: ARIMA, OLS, VAR",
      "QuantLib-Python: curves, pricing, instruments",
      "Zipline or Backtrader: backtesting framework",
      "yfinance + pandas-datareader: data sourcing",
      "matplotlib + Plotly: financial charting",
      "scikit-learn: pipelines & CV for finance",
      "Monte Carlo option pricer (European + Asian)",
      "Greeks calculator & vol surface plotter",
      "Mean-variance portfolio optimizer (Markowitz)"
    ],
    milestone:"A fully backtested momentum strategy with realistic transaction costs, published on GitHub with a performance tearsheet showing Sharpe, drawdown, and turnover.",
    leverage:"SnapSearch RAG + Corporate Finance Autopilot prove production-quality Python pipelines. Your intermediate Python is already enough — extend it to scientific computing libraries.",
    res:[
      "Python for Finance — Yves Hilpisch",
      "QuantLib documentation (quantlib.org)",
      "Backtrader documentation (backtrader.com)",
      "Zipline-reloaded — maintained community fork"
    ]
  },
  {
    id:5, sh:"C++ & low-latency", nm:"C++ & low-latency systems",
    mo:"Months 7–13", col:"#d45858", start:7, dur:7,
    ds:"Required for HFT roles at Optiver, Jane Street, and IMC. Your Java background cuts the learning curve — OOP and concurrency instincts transfer fully.",
    topics:[
      "Modern C++17/20 syntax & idioms",
      "STL: vector, map, unordered_map, deque",
      "Smart pointers (unique, shared, weak) & RAII",
      "Template metaprogramming basics",
      "Move semantics & perfect forwarding",
      "Memory layout: stack, heap, cache lines",
      "std::atomic & memory ordering (acquire/release)",
      "Lock-free data structures: SPSC queue",
      "std::thread, mutex, condition_variable",
      "FIX protocol 4.2/4.4 — session layer",
      "Limit order book: price-time priority impl.",
      "Network sockets & UDP multicast",
      "Latency profiling: perf, valgrind, cachegrind"
    ],
    milestone:"A price-time priority limit order book in C++ with measured insert/cancel/match latency. A FIX 4.4 session handler. A benchmarked lock-free vs mutex queue comparison.",
    leverage:"Java OOP = C++ OOP. Generics = templates. ExecutorService = std::thread/atomic. Spring concurrency = std::mutex patterns. Algorithms and DS knowledge transfers in full.",
    res:[
      "C++ High Performance — Björn Andrist & Viktor Sehr",
      "The Art of Writing Efficient Programs — Fedor Pikus",
      "C++ Concurrency in Action — Anthony Williams",
      "learncpp.com — free comprehensive reference"
    ]
  },
  {
    id:6, sh:"ML for finance", nm:"Machine learning for finance",
    mo:"Months 9–15", col:"#8870d4", start:9, dur:7,
    ds:"Essential at systematic hedge funds. Financial ML has different failure modes than standard ML — overfitting kills you silently and expensively.",
    topics:[
      "ARIMA & seasonal decomposition (STL)",
      "GARCH(1,1) & volatility modelling",
      "Kalman filter & state space models",
      "Hidden Markov Models: regime detection",
      "XGBoost for cross-sectional alpha",
      "Purged k-fold cross-validation — López de Prado",
      "Feature engineering for financial data",
      "Fractional differentiation for stationarity",
      "LSTM for time series prediction",
      "Transformer-based sequence models",
      "Reinforcement learning for order execution",
      "Walk-forward & combinatorial backtesting"
    ],
    milestone:"An ML-driven alpha signal backtested with walk-forward validation and realistic transaction costs. Entered in Numerai or Jane Street Kaggle competition.",
    leverage:"Corporate Finance Autopilot (RAG + LangChain + Mixtral on GCP) directly demonstrates the AI systems thinking quant research teams are now hiring for. Frame it that way.",
    res:[
      "Advances in Financial Machine Learning — López de Prado (essential)",
      "Machine Learning for Asset Managers — López de Prado",
      "Jane Street Market Prediction — Kaggle (ongoing)",
      "Numerai tournament — weekly alpha testing",
      "WorldQuant Brain — alpha expression platform"
    ]
  },
  {
    id:7, sh:"Portfolio & careers", nm:"Portfolio, certifications & targeting",
    mo:"Months 12–18", col:"#46b888", start:12, dur:7,
    ds:"Converting skills into offers. A deployed interactive system beats Jupyter notebooks in every single quant interview — build real things.",
    topics:[
      "Full backtested strategy on GitHub (Sharpe > 1)",
      "Options pricing engine with vol surface (React)",
      "Risk system: VaR, CVaR, stress tests (Spring Boot)",
      "C++ order book with latency benchmark report",
      "Factor model replicating Fama-French live",
      "Quant research dashboard (React + Spring Boot)",
      "CFA Level 1 preparation",
      "FRM Part 1 preparation",
      "Jane Street puzzles (janestreet.com/puzzles)",
      "Quant brainteasers: Heard on the Street",
      "Interview prep: Practical Guide to Quant Interviews",
      "Leetcode: medium — trees, graphs, DP"
    ],
    milestone:"3 complete public GitHub projects, CFA L1 registered, applied to 5+ target firms with tailored CVs. Optiver Amsterdam, IMC Amsterdam, G-Research London, Susquehanna Dublin, DBS Singapore.",
    leverage:"Full-stack skills (React + Spring Boot) are rare among quant candidates. A live research dashboard with real-time performance metrics tells a story no Jupyter notebook can.",
    res:[
      "Heard on the Street — Timothy Crack",
      "A Practical Guide to Quant Interviews — Xinfeng Zhou",
      "janestreet.com/puzzles — puzzle archive",
      "cfa.institute — CFA Level 1 registration",
      "garp.org — FRM Part 1 registration"
    ]
  }
];

const TOTAL = 18;
const SKILL_DEFS = [
  {nm:"Mathematics",       pid:1},
  {nm:"Stochastic calc.",  pid:2},
  {nm:"Financial theory",  pid:3},
  {nm:"Python quant libs", pid:4},
  {nm:"C++ systems",       pid:5},
  {nm:"ML for finance",    pid:6},
  {nm:"Risk management",   pids:[3,6]},
  {nm:"Portfolio/projects",pid:7}
];

// ═══════════════════════════════════════════════════════════════
// LEARNING MATERIALS DATABASE
// ═══════════════════════════════════════════════════════════════

const LEARNING_MATERIALS = {
  // Phase 1: Math Foundations
  "1-0": {
    title: "Linear Algebra - Vectors, Matrices, Transforms",
    explanation: `<strong>Linear algebra</strong> is the foundation of all quantitative finance. Every asset return, covariance matrix, and factor model is built on linear algebra operations. In quant finance, matrices represent portfolios, correlations, and transformations of data.</p>
    <p><strong>Vectors</strong> are ordered collections of numbers representing points in n-dimensional space. In finance, a portfolio's returns across assets form a vector.</p>
    <p><strong>Matrices</strong> are 2D arrays that represent linear transformations or collections of vectors. The covariance matrix, showing how asset returns co-move, is central to portfolio theory.</p>
    <p><strong>Transforms</strong> like rotations, scaling, and projections change vector spaces in predictable ways. PCA uses these to reduce dimensionality while preserving variance.</p>`,
    keyPoints: [
      "Matrix multiplication is NOT commutative: AB ≠ BA in general",
      "Eigenvalues tell you about the 'stretching' behavior of a matrix",
      "A covariance matrix is always symmetric and positive semi-definite",
      "Matrix inverses exist only for full-rank matrices",
      "The determinant tells you about volume scaling and matrix invertibility"
    ],
    formula: `// Portfolio return as dot product
r_portfolio = w · r = Σ(wᵢ × rᵢ)

// Covariance matrix definition
Σᵢⱼ = Cov(rᵢ, rⱼ) = E[(rᵢ - μᵢ)(rⱼ - μⱼ)]`,
    python: `import numpy as np

# Portfolio return
weights = np.array([0.3, 0.5, 0.2])
returns = np.array([0.08, 0.12, -0.03])
portfolio_return = np.dot(weights, returns)

# Covariance matrix
cov_matrix = np.cov(returns)  # 3x3 matrix

# Matrix operations
eigenvalues, eigenvectors = np.linalg.eig(cov_matrix)`,
    videos: [
      { title: "3Blue1Brown - Linear Algebra Essence", query: "3Blue1Brown linear algebra essence vectors" },
      { title: "MIT 18.06 - Vectors and Matrices", query: "MIT 18.06 Gilbert Strang vectors matrices" }
    ],
    resources: [
      { name: "Mathematics for Machine Learning (Free PDF)", url: "https://mml-book.github.io/" },
      { name: "Khan Academy - Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra" }
    ]
  },
  "1-1": {
    title: "Eigendecomposition & SVD",
    explanation: `<strong>Eigendecomposition</strong> breaks a matrix into its fundamental building blocks: eigenvectors (directions that don't change direction when the matrix is applied) and eigenvalues (how much it stretches in those directions).</p>
    <p>In finance, PCA uses eigendecomposition of the covariance matrix to find the principal components - the directions of maximum variance in your data.</p>
    <p><strong>SVD (Singular Value Decomposition)</strong> generalizes eigendecomposition to non-square matrices. It's more numerically stable and always exists. Used in recommender systems, dimensionality reduction, and solving linear systems.</p>`,
    keyPoints: [
      "Covariance matrices are symmetric, so eigenvalues are always real (never complex)",
      "SVD is numerically more stable than direct eigendecomposition",
      "The number of non-zero singular values equals the rank of the matrix",
      "PCA projects data onto eigenvectors of the covariance matrix",
      "Truncating SVD gives optimal low-rank approximation (by Frobenius norm)"
    ],
    formula: `// Eigendecomposition
A = V × Λ × V⁻¹
Where V = eigenvectors, Λ = diagonal eigenvalues

// SVD
A = U × Σ × Vᵀ
Where U, V are orthogonal, Σ is diagonal singular values`,
    python: `import numpy as np

A = np.array([[3, 1], [1, 2]])

# Eigendecomposition
eigenvalues, eigenvectors = np.linalg.eig(A)

# SVD
U, singular_values, Vt = np.linalg.svd(A)

# PCA using eigendecomposition of covariance
cov = np.cov(data.T)
eigenvalues, eigenvectors = np.linalg.eig(cov)
principal_components = eigenvectors[:, :k]`,
    videos: [
      { title: "Eigendecomposition & PCA Explained", query: "eigenvectors eigenvalues PCA explained" },
      { title: "SVD Intuition", query: "singular value decomposition SVD intuition" }
    ],
    resources: [
      { name: "PCA Tutorial - Sebastian Raschka", url: "https://sebastianraschka.com/Articles/2014_pca.html" }
    ]
  },
  "1-2": {
    title: "PCA - Theory and Implementation",
    explanation: `<strong>Principal Component Analysis (PCA)</strong> is a dimensionality reduction technique that finds orthogonal axes (principal components) along which your data varies most. It's essential for factor models, risk decomposition, and regime identification.</p>
    <p>In quantitative finance, PCA is used to build factor models, identify correlated assets, reduce noise in time series, and construct statistical arbitrage strategies.</p>`,
    keyPoints: [
      "First principal component captures maximum variance",
      "Components are orthogonal (uncorrelated)",
      "The number of components needed equals the effective dimensionality",
      "Variance explained by each component is proportional to its eigenvalue",
      "Standardize data before PCA to avoid domination by high-variance features"
    ],
    formula: `// Covariance matrix of standardized data
Σ = (1/n) XᵀX

// Principal components are eigenvectors of Σ
PC₁, PC₂, ... = argmax_{||v||=1} Var(Xv)`,
    python: `from sklearn.decomposition import PCA
import numpy as np

# Returns data: rows = dates, cols = assets
returns = np.random.randn(252, 10)

# Fit PCA
pca = PCA(n_components=3)
principal_components = pca.fit_transform(returns)

# Explained variance
print(f"Variance explained: {pca.explained_variance_ratio_}")

# Reconstruct with reduced dimensions
reduced = pca.transform(returns)
reconstructed = pca.inverse_transform(reduced)`,
    videos: [
      { title: "PCA Explained Visually", query: "PCA principal component analysis explained visually" },
      { title: "PCA for Finance Applications", query: "PCA quantitative finance portfolio" }
    ],
    resources: [
      { name: "scikit-learn PCA Documentation", url: "https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html" }
    ]
  },
  "1-3": {
    title: "Multivariate Calculus",
    explanation: `<strong>Multivariate calculus</strong> extends single-variable calculus to functions of multiple variables. In quantitative finance, it's fundamental to optimization (finding optimal portfolios), numerical methods (pricing complex derivatives), and machine learning (training neural networks).</p>
    <p>Key concepts include partial derivatives, multiple integrals, and change of variables in integration.</p>`,
    keyPoints: [
      "Partial derivatives measure rate of change with respect to one variable while holding others constant",
      "The gradient points in the direction of steepest ascent",
      "Second-order partial derivatives form the Hessian matrix",
      "Multiple integrals extend volume calculations to higher dimensions",
      "The Jacobian matrix is crucial for change of variables"
    ],
    formula: `// Partial derivative
∂f/∂x = lim_{h→0} [f(x+h, y) - f(x, y)] / h

// Gradient (vector of partial derivatives)
∇f = [∂f/∂x₁, ∂f/∂x₂, ..., ∂f/∂xₙ]ᵀ

// Hessian matrix
H = [∂²f/∂xᵢ∂xⱼ]`,
    python: `import autograd.numpy as np
from autograd import grad, hessian

# Define function
def portfolio_variance(w, cov):
    return w @ cov @ w

# Gradient
grad_func = grad(portfolio_variance)
gradient = grad_func(weights, cov_matrix)

# Hessian
hess_func = hessian(portfolio_variance)
hessian_matrix = hess_func(weights, cov_matrix)`,
    videos: [
      { title: "Multivariate Calculus Overview", query: "multivariate calculus calculus 3 overview" },
      { title: "Gradient and Hessian Explained", query: "gradient hessian matrix calculus" }
    ],
    resources: [
      { name: "Khan Academy Multivariable Calculus", url: "https://www.khanacademy.org/math/multivariable-calculus" }
    ]
  },
  "1-4": {
    title: "Gradient, Hessian and Jacobian",
    explanation: `<strong>The Gradient</strong> is a vector of first-order partial derivatives pointing in the direction of steepest increase. Used in optimization (gradient descent) and to find critical points.</p>
    <p><strong>The Hessian</strong> is the matrix of second-order partial derivatives. It tells you whether a critical point is a maximum, minimum, or saddle. Critical for understanding the curvature of loss functions in ML.</p>
    <p><strong>The Jacobian</strong> is the matrix of first-order partial derivatives for vector-valued functions. Used in change of variables, implicit function theorem, and nonlinear transformations.</p>`,
    keyPoints: [
      "Gradient is zero at critical points (local min/max)",
      "Hessian positive definite at local minima",
      "Hessian negative definite at local maxima",
      "Saddle points have indefinite Hessian",
      "Jacobian is the multidimensional analog of the derivative"
    ],
    formula: `// Gradient
∇f(x) = [∂f/∂x₁, ∂f/∂x₂, ..., ∂f/∂xₙ]ᵀ

// Hessian
Hᵢⱼ = ∂²f/(∂xᵢ∂xⱼ)

// Jacobian for g: ℝⁿ → ℝᵐ
Jᵢⱼ = ∂gᵢ/∂xⱼ`,
    python: `import jax.numpy as jnp
from jax import grad, hessian

# Using JAX for automatic differentiation
def black_scholes_call(S, K, r, sigma, T):
    d1 = (jnp.log(S/K) + (r + sigma**2/2)*T) / (sigma*jnp.sqrt(T))
    d2 = d1 - sigma*jnp.sqrt(T)
    return S*jnorm.cdf(d1) - K*jnp.exp(-r*T)*jnorm.cdf(d2)

# First derivative (delta)
delta = grad(black_scholes_call, argnums=0)

# Second derivative (gamma)
gamma = hessian(black_scholes_call, argnums=0)`,
    videos: [
      { title: "Gradient Descent Explained", query: "gradient descent machine learning explained" },
      { title: "Jacobian and Hessian Matrices", query: "jacobian hessian matrix calculus" }
    ],
    resources: [
      { name: "Matrix Calculus - Gene Sherman", url: "https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf" }
    ]
  },
  "1-5": {
    title: "Constrained Optimisation - Lagrangian",
    explanation: `<strong>Lagrangian multipliers</strong> solve constrained optimization problems. In quant finance, this is essential for portfolio optimization (maximize return subject to risk constraint), Black-Scholes derivation, and mean-variance optimization.</p>
    <p>The key insight: at the optimum of a constrained problem, the gradient of the objective is parallel to the gradient of the constraint.</p>`,
    keyPoints: [
      "The Lagrangian combines objective and constraints with multipliers",
      "KKT conditions generalize Lagrange multipliers to inequality constraints",
      "At optimum: ∇f = λ∇g (gradients are parallel)",
      "The multiplier λ tells you the sensitivity to constraint changes",
      "Equality constraints: L(x, λ) = f(x) + λg(x)"
    ],
    formula: `// Constrained problem
min f(x)
s.t. g(x) = 0

// Lagrangian
L(x, λ) = f(x) + λᵀg(x)

// KKT conditions at optimum
∇L = ∇f + λᵀ∇g = 0
g(x) = 0`,
    python: `from scipy.optimize import minimize
import numpy as np

# Portfolio optimization example
def portfolio_return(w, mean_returns):
    return -np.dot(w, mean_returns)  # Negative for minimization

def portfolio_risk(w, cov):
    return np.sqrt(w @ cov @ w)

# Constraints
constraints = [
    {'type': 'eq', 'fun': lambda w: np.sum(w) - 1}  # weights sum to 1
]

# Bounds (no short selling)
bounds = tuple((0, 1) for _ in range(n_assets))

# Optimize
result = minimize(
    portfolio_return, initial_weights,
    args=(mean_returns,),
    method='SLSQP',
    bounds=bounds,
    constraints=constraints
)`,
    videos: [
      { title: "Lagrange Multipliers Explained", query: "lagrange multipliers constrained optimization explained" },
      { title: "KKT Conditions", query: "KKT conditions optimization" }
    ],
    resources: [
      { name: "Convex Optimization - Boyd & Vandenberghe", url: "https://web.stanford.edu/~boyd/cvxbook/" }
    ]
  },
  "1-6": {
    title: "Probability Theory & Random Variables",
    explanation: `<strong>Probability theory</strong> is the mathematical language of uncertainty. In quant finance, asset returns are modeled as random variables, enabling us to price derivatives, measure risk, and construct portfolios.</p>
    <p>Key concepts include probability distributions, expectation, variance, and conditional probability.</p>`,
    keyPoints: [
      "Random variables can be discrete (counts) or continuous (measurements)",
      "PDF integrates to 1 over the entire domain",
      "CDF gives P(X ≤ x) and is always non-decreasing",
      "Expectation is linear: E[aX + bY] = aE[X] + bE[Y]",
      "Variance is NOT linear: Var(aX) = a²Var(X)"
    ],
    formula: `// Expectation (discrete)
E[X] = Σ xᵢ P(X = xᵢ)

// Expectation (continuous)
E[X] = ∫ x f(x) dx

// Variance
Var(X) = E[(X - μ)²] = E[X²] - E[X]²

// Covariance
Cov(X,Y) = E[(X - μₓ)(Y - μᵧ)]`,
    python: `import numpy as np
from scipy import stats

# Simulate asset returns (normally distributed)
np.random.seed(42)
returns = np.random.normal(0.001, 0.02, 252)

# Key statistics
mean = np.mean(returns)
std = np.std(returns)
var_95 = np.percentile(returns, 5)  # VaR

# Fit distribution to data
mu, sigma = stats.norm.fit(returns)
skewness = stats.skew(returns)
kurtosis = stats.kurtosis(returns)`,
    videos: [
      { title: "Probability Theory Fundamentals", query: "probability theory random variables explained" },
      { title: "Statistics for Finance", query: "statistics probability finance tutorial" }
    ],
    resources: [
      { name: "Introduction to Probability - Blitzstein & Hwang", url: "https://projects.iq.harvard.edu/stat110" }
    ]
  },
  "1-7": {
    title: "Distributions: Normal, Poisson, Chi-squared",
    explanation: `<strong>Probability distributions</strong> describe how random variables behave. Different phenomena follow different distributions.</p>
    <p><strong>Normal (Gaussian)</strong>: The bell curve. Asset returns are often assumed normal in basic models. The Central Limit Theorem says sums of random variables tend toward normal.</p>
    <p><strong>Poisson</strong>: Models count data and arrival times (e.g., number of trades, jump arrivals).</p>
    <p><strong>Chi-squared</strong>: Distribution of squared normal variables. Used in hypothesis testing and confidence intervals for variance.</p>`,
    keyPoints: [
      "Normal distribution is fully characterized by mean and variance",
      "68-95-99.7 rule: 68% within 1σ, 95% within 2σ, 99.7% within 3σ",
      "Poisson process: events occur independently at constant rate λ",
      "Chi-squared with k degrees of freedom = sum of k squared standard normals",
      "Fat tails in financial data mean normal underestimates tail risk"
    ],
    formula: `// Normal PDF
f(x) = (1/σ√(2π)) exp(-(x-μ)²/2σ²)

// Poisson PMF
P(X=k) = (λᵏ e⁻λ) / k!

// Chi-squared PDF (k degrees of freedom)
f(x) = x^(k/2-1) e^(-x/2) / (2^(k/2) Γ(k/2))`,
    python: `from scipy import stats
import numpy as np

# Normal distribution
X = stats.norm(loc=0.001, scale=0.02)  # mean=0.001, std=0.02
prob_below_minus_5pct = X.cdf(-0.05)
var_95 = X.ppf(0.05)  # 5% VaR

# Poisson distribution (e.g., 10 trades per day)
Y = stats.poisson(mu=10)
prob_exactly_5 = Y.pmf(5)
prob_at_least_15 = 1 - Y.cdf(14)

# Chi-squared (e.g., test of variance)
Z = stats.chi2(df=10)
critical_value = Z.ppf(0.95)  # 95% critical value`,
    videos: [
      { title: "Normal Distribution Explained", query: "normal distribution gaussian explained" },
      { title: "Poisson Process", query: "poisson process probability" }
    ],
    resources: [
      { name: "Probability Distributions Cheat Sheet", url: "https:// stattrek.com/probability/distributions.aspx" }
    ]
  },
  "1-8": {
    title: "MLE and MAP Estimation",
    explanation: `<strong>Maximum Likelihood Estimation (MLE)</strong> finds the parameter values that make the observed data most probable. It's the foundation of statistical inference and machine learning.</p>
    <p><strong>Maximum A Posteriori (MAP)</strong> extends MLE by incorporating prior beliefs about parameters. When priors are uniform, MAP equals MLE.</p>
    <p>In quant finance, these methods estimate return distributions, volatility models (GARCH), and machine learning model parameters.</p>`,
    keyPoints: [
      "Likelihood: P(data | parameters)",
      "MLE maximizes the likelihood function",
      "MAP includes prior: P(parameters | data) ∝ P(data | parameters) × P(parameters)",
      "As sample size increases, MAP converges to MLE",
      "MOM (Method of Moments) is an alternative: match sample moments to theoretical moments"
    ],
    formula: `// Likelihood function
L(θ) = P(X₁=x₁, ..., Xₙ=xₙ | θ) = ∏ᵢ P(xᵢ | θ)

// Log-likelihood (numerically more stable)
ℓ(θ) = log L(θ) = Σᵢ log P(xᵢ | θ)

// MLE
θ_MLE = argmax_θ ℓ(θ)

// MAP
θ_MAP = argmax_θ ℓ(θ) + log P(θ)`,
    python: `from scipy.optimize import minimize
import numpy as np
from scipy.stats import norm

# MLE for normal distribution parameters
returns = np.random.normal(0.001, 0.02, 252)

def neg_log_likelihood(params, data):
    mu, sigma = params
    return -np.sum(norm.logpdf(data, loc=mu, scale=sigma))

result = minimize(
    neg_log_likelihood,
    x0=[0, 0.1],  # initial guess
    args=(returns,),
    bounds=[(None, None), (1e-6, None)]  # sigma > 0
)
mu_mle, sigma_mle = result.x`,
    videos: [
      { title: "MLE Explained", query: "maximum likelihood estimation MLE explained" },
      { title: "MAP Estimation", query: "MAP maximum a posteriori estimation bayesian" }
    ],
    resources: [
      { name: "Statistical Inference - Casella & Berger", url: "https://www.amazon.com/Statistical-Inference-George-Casella/dp/0534243126" }
    ]
  },
  "1-9": {
    title: "Bayesian Inference & Conjugate Priors",
    explanation: `<strong>Bayesian inference</strong> updates beliefs about parameters as new data arrives. Unlike frequentist statistics, Bayesian methods incorporate prior knowledge and provide full probability distributions over parameters.</p>
    <p><strong>Conjugate priors</strong> are special prior distributions that lead to closed-form posterior distributions, making Bayesian inference computationally tractable.</p>`,
    keyPoints: [
      "Posterior ∝ Likelihood × Prior",
      "Conjugate priors: Normal-Normal, Beta-Bernoulli, Gamma-Poisson",
      "Posterior predictive incorporates parameter uncertainty",
      "Credible intervals vs confidence intervals: Bayesian vs frequentist",
      "Markov Chain Monte Carlo (MCMC) for non-conjugate cases"
    ],
    formula: `// Bayes' theorem
P(θ | data) = P(data | θ) × P(θ) / P(data)

// Conjugate Normal-Normal example:
// Prior: θ ~ N(μ₀, σ₀²)
// Likelihood: Xᵢ | θ ~ N(θ, σ²)
// Posterior: θ | X ~ N(μₙ, σₙ²)
// where:
// μₙ = (μ₀/σ₀² + nX̄/σ²) / (1/σ₀² + n/σ²)
// σₙ² = 1 / (1/σ₀² + n/σ²)`,
    python: `import pymc3 as pm
import numpy as np

# Bayesian estimation of returns
returns = np.random.normal(0.001, 0.02, 252)

with pm.Model():
    # Prior
    mu = pm.Normal('mu', mu=0, sigma=0.1)
    sigma = pm.HalfNormal('sigma', sigma=0.1)

    # Likelihood
    likelihood = pm.Normal('returns', mu=mu, sigma=sigma, observed=returns)

    # Posterior
    trace = pm.sample(2000, tune=1000)

# Summary statistics
pm.summary(trace)`,
    videos: [
      { title: "Bayesian Statistics Explained", query: "bayesian statistics explained introduction" },
      { title: "Bayesian Inference for Finance", query: "bayesian inference quantitative finance" }
    ],
    resources: [
      { name: "Probabilistic Programming & Bayesian Methods for Hackers", url: "https://camdavidsonpilon.github.io/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers/" }
    ]
  },
  "1-10": {
    title: "Hypothesis Testing: t-test, chi-sq, KS",
    explanation: `<strong>Hypothesis testing</strong> determines whether observed data provides sufficient evidence to reject a null hypothesis. Essential for validating trading strategies and financial models.</p>
    <p><strong>t-test</strong>: Tests if means of two groups differ (or if a sample mean differs from a hypothesized value).</p>
    <p><strong>Chi-squared test</strong>: Tests categorical data or goodness-of-fit to a distribution.</p>
    <p><strong>Kolmogorov-Smirnov (KS) test</strong>: Tests whether a sample comes from a specific distribution.</p>`,
    keyPoints: [
      "Null hypothesis (H₀): typically the 'no effect' or 'status quo' assumption",
      "p-value: probability of observing data at least as extreme as actual, given H₀",
      "Reject H₀ if p-value < α (typically 0.05)",
      "Type I error: false positive (reject H₀ when true)",
      "Type II error: false negative (fail to reject H₀ when false)"
    ],
    formula: `// t-statistic (one-sample)
t = (X̄ - μ₀) / (s/√n)

// t-statistic (two-sample, equal variances)
t = (X̄₁ - X̄₂) / sp × √(1/n₁ + 1/n₂)

// KS statistic
D = max_x |Fₙ(x) - F₀(x)|`,
    python: `from scipy import stats
import numpy as np

returns = np.random.normal(0.001, 0.02, 252)

# One-sample t-test: is mean significantly different from 0?
t_stat, p_value = stats.ttest_1samp(returns, 0)

# Two-sample t-test: are means of two strategies different?
strategy1_returns = np.random.normal(0.001, 0.02, 252)
strategy2_returns = np.random.normal(0.002, 0.025, 252)
t_stat, p_value = stats.ttest_ind(strategy1_returns, strategy2_returns)

# KS test: do returns follow normal distribution?
D, p_value = stats.kstest(returns, 'norm', args=(returns.mean(), returns.std()))`,
    videos: [
      { title: "Hypothesis Testing Explained", query: "hypothesis testing statistics tutorial" },
      { title: "p-value Explained", query: "p-value statistics explained" }
    ],
    resources: [
      { name: "NIST Statistics Handbook", url: "https://www.itl.nist.gov/div898/handbook/" }
    ]
  },
  "1-11": {
    title: "Linear and Logistic Regression",
    explanation: `<strong>Linear regression</strong> models the relationship between a dependent variable and one or more independent variables by fitting a linear equation. In quant finance, it's used for factor models, return prediction, and risk attribution.</p>
    <p><strong>Logistic regression</strong> models binary outcomes (e.g., up/down days, default/no default) using the logistic function. Despite the name, it's used for classification.</p>`,
    keyPoints: [
      "OLS minimizes sum of squared residuals",
      "Assumptions: linearity, independence, homoscedasticity, normality",
      "R-squared measures proportion of variance explained",
      "Multicollinearity inflates standard errors",
      "Logistic regression outputs probabilities via sigmoid function"
    ],
    formula: `// Linear regression
y = β₀ + β₁x₁ + ... + βₙxₙ + ε

// OLS solution
β = (XᵀX)⁻¹Xᵀy

// Logistic function
P(y=1) = 1 / (1 + e^-(β₀ + β₁x₁ + ...))`,
    python: `import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.metrics import r2_score, classification_report

# Linear regression
X = portfolio_factors  # shape: (n_samples, n_features)
y = returns
model = LinearRegression().fit(X, y)
predictions = model.predict(X)
r2 = r2_score(y, predictions)

# Logistic regression
X = factor_features
y = (returns > 0).astype(int)  # Binary: up vs down day
log_model = LogisticRegression().fit(X, y)
prob_up = log_model.predict_proba(X)[:, 1]`,
    videos: [
      { title: "Linear Regression Explained", query: "linear regression machine learning explained" },
      { title: "Logistic Regression", query: "logistic regression classification explained" }
    ],
    resources: [
      { name: "An Introduction to Statistical Learning", url: "https://www.statlearning.com/" }
    ]
  },
  // Phase 2: Stochastic Calculus
  "2-0": {
    title: "Brownian Motion & Wiener Process",
    explanation: `<strong>Brownian motion</strong> (also called the Wiener process) is the continuous-time limit of random walk. It's the building block of continuous-time finance models. Named after botanist Robert Brown who observed pollen particles moving randomly under a microscope.</p>
    <p>Key properties: starts at 0, has independent increments, increments are normally distributed, paths are continuous but nowhere differentiable.</p>`,
    keyPoints: [
      "W(t) is continuous almost surely (no jumps)",
      "W(t) has stationary, independent increments",
      "W(t) - W(s) ~ N(0, t-s) for t > s",
      "Sample paths are fractal - rough at every scale",
      "Quadratic variation on [0,T] equals T"
    ],
    formula: `// Brownian motion properties
W(0) = 0
W(t) - W(s) ~ N(0, t-s) for t > s
W(t) - W(s) ⊥ W(u) - W(v) for non-overlapping intervals

// Scaling property
W(t) = √t × W(1)  // same distribution`,
    python: `import numpy as np
import matplotlib.pyplot as plt

def simulate_brownian_motion(T, N):
    """Simulate Brownian motion on [0, T] with N steps."""
    dt = T / N
    # Random increments
    dW = np.random.normal(0, np.sqrt(dt), N)
    # Cumulative sum gives Brownian motion
    W = np.concatenate([[0], np.cumsum(dW)])
    return W

# Simulate and plot
T = 1.0
N = 1000
t = np.linspace(0, T, N+1)
W = simulate_brownian_motion(T, N)

plt.figure(figsize=(10, 4))
plt.plot(t, W)
plt.title('Simulated Brownian Motion')
plt.xlabel('Time')
plt.ylabel('W(t)')`,
    videos: [
      { title: "Brownian Motion Explained", query: "brownian motion wiener process explained" },
      { title: "Random Walk and Brownian Motion", query: "random walk brownian motion mathematics" }
    ],
    resources: [
      { name: "Elementary Stochastic Calculus with Finance in View", url: "https://www.amazon.com/Elementary-Stochastic-Calculus-Finance-Mathematics/dp/9810235437" }
    ]
  },
  "2-1": {
    title: "Quadratic Variation",
    explanation: `<strong>Quadratic variation</strong> measures the total 'activity' or 'energy' of a stochastic process. Unlike regular variation (which is smooth), quadratic variation captures the roughness of paths.</p>
    <p>For Brownian motion, the quadratic variation on [0,T] equals T. This is fundamental to Itô calculus - we can't use ordinary calculus because Brownian motion isn't differentiable.</p>`,
    keyPoints: [
      "Quadratic variation of W on [0,T] is T (for standard Brownian motion)",
      "[X,X](t) denotes quadratic variation of process X",
      "Cross-variation [W,M] for independent processes is 0",
      "Itô isometry: E[W(t)²] = t = Var(W(t))",
      "Quadratic variation drives the variance term in Itô's lemma"
    ],
    formula: `// Quadratic variation (limit definition)
[X,X](t) = lim_{n→∞} Σᵢ (X(tᵢ₊₁) - X(tᵢₖ))²

// For Brownian motion
[W,W](T) = T almost surely

// Cross variation
[W,M]_t = lim Σ (W(tᵢ₊₁) - W(tᵢ))(M(tᵢ₊₁) - M(tᵢ))`,
    python: `import numpy as np

def quadratic_variation(path, dt):
    """Calculate quadratic variation of a path."""
    increments = np.diff(path)
    return np.sum(increments ** 2) / dt  # Normalized by dt

def cross_variation(path1, path2, dt):
    """Calculate cross variation between two paths."""
    inc1 = np.diff(path1)
    inc2 = np.diff(path2)
    return np.sum(inc1 * inc2) / dt

# Example: Quadratic variation of simulated Brownian motion
T = 1.0
N = 10000
dt = T / N
W = simulate_brownian_motion(T, N)
qv = quadratic_variation(W, dt)
print(f"Quadratic variation: {qv:.4f} (should be close to {T})")`,
    videos: [
      { title: "Quadratic Variation Explained", query: "quadratic variation stochastic calculus" }
    ],
    resources: [
      { name: "Stochastic Calculus for Finance I - Shreve", url: "https://www.amazon.com/Stochastic-Calculus-Finance-Bernstein-Short/dp/0387249680" }
    ]
  },
  "2-2": {
    title: "Itô's Lemma - 1D and Multi-dimensional",
    explanation: `<strong>Itô's lemma</strong> is the chain rule for stochastic calculus. It tells you how to differentiate functions of stochastic processes. This is THE fundamental tool for derivatives pricing - it's how we derive the Black-Scholes PDE.</p>
    <p>The key difference from ordinary calculus: because (dW)² = dt (non-zero!), there are extra terms when we apply the chain rule.</p>`,
    keyPoints: [
      "Itô processes: dX = μdt + σdW",
      "The term (1/2)σ²∂²f/∂x² comes from (dW)² = dt",
      "Functions of Brownian motion follow a specific SDE",
      "Multi-dimensional version involves cross-partials and covariations",
      "Itô's lemma is essential for deriving Black-Scholes"
    ],
    formula: `// Itô's Lemma (1D)
Let X(t) follow: dX = μdt + σdW
Then for f(X,t):

df = (∂f/∂t + μ∂f/∂x + (1/2)σ²∂²f/∂x²)dt + σ(∂f/∂x)dW

// Multi-dimensional
df = (∂f/∂t + μ·∇f + (1/2)Tr(σσᵀH))dt + σᵀ∇f·dW`,
    python: `import sympy as sp

# Define symbols
t, S, mu, sigma = sp.symbols('t S mu sigma', positive=True)
f = sp.Function('f')

# Define Itô's lemma symbolically
# df = df/dt*dt + df/dS*dS + 1/2*dS^2*d^2f/dS^2
# where dS = mu*S*dt + sigma*S*dW, so dS^2 = sigma^2*S^2*dt

dS_sq = sigma**2 * S**2  # (dW)^2 = dt
print("Itô correction term (1/2)*σ²*S²*f''(S,t)")

# Apply Itô to log(S) for GBM
# d(log S) = (mu - sigma^2/2)dt + sigma*dW
print("d(log S) = (μ - σ²/2)dt + σdW")`,
    videos: [
      { title: "Itô's Lemma Explained", query: "ito lemma stochastic calculus explained" },
      { title: "Black-Scholes from Itô's Lemma", query: "black-scholes derivation ito lemma" }
    ],
    resources: [
      { name: "Itô's Calculus - Fima Klebaner", url: "https://www.amazon.com/Introduction-Stochastic-Calculus-Applications-Finance/dp/1848168320" }
    ]
  },
  "2-3": {
    title: "Stochastic Differential Equations (SDEs)",
    explanation: `<strong>Stochastic differential equations</strong> describe systems that evolve under both deterministic and random influences. They're the continuous-time analog of difference equations with noise.</p>
    <p>The solution to an SDE is itself a stochastic process. Most SDEs in finance don't have closed-form solutions and must be simulated using numerical methods (Euler-Maruyama, Milstein).</p>`,
    keyPoints: [
      "SDE notation is shorthand for integral equations",
      "dX = a(X,t)dt + b(X,t)dW",
      "Existence and uniqueness require Lipschitz and growth conditions",
      "Geometric Brownian Motion is the most important finance SDE",
      "Numerical schemes converge to true solution as dt → 0"
    ],
    formula: `// SDE notation (shorthand for integral equation)
dX(t) = μ(X,t)dt + σ(X,t)dW(t)

// Equivalent integral form
X(t) = X(0) + ∫₀ᵗ μ(X,s)ds + ∫₀ᵗ σ(X,s)dW(s)

// Euler-Maruyama discretization
X(t+dt) = X(t) + μ(X,t)dt + σ(X,t)√dt × Z`,
    python: `import numpy as np

def euler_maruyama(mu, sigma, X0, T, N, paths=1):
    """Simulate SDE using Euler-Maruyama method."""
    dt = T / N
    X = np.zeros((N+1, paths))
    X[0] = X0

    for i in range(N):
        dW = np.random.normal(0, np.sqrt(dt), paths)
        X[i+1] = X[i] + mu(X[i], i*dt) * dt + sigma(X[i], i*dt) * dW

    return X

# Example: Geometric Brownian Motion
def gbm_drift(x, t): return 0.1 * x  # μ = 0.1
def gbm_diffusion(x, t): return 0.2 * x  # σ = 0.2

X = euler_maruyama(gbm_drift, gbm_diffusion, S0=100, T=1, N=252)`,
    videos: [
      { title: "SDE Introduction", query: "stochastic differential equations introduction" },
      { title: "Numerical Methods for SDE", query: "euler maruyama method sde simulation" }
    ],
    resources: [
      { name: "Numerical Solution of Stochastic Differential Equations", url: "https://www.amazon.com/Numerical-Solution-Stochastic-Differential-Equations/dp/3540540628" }
    ]
  },
  "2-4": {
    title: "Geometric Brownian Motion (GBM)",
    explanation: `<strong>Geometric Brownian Motion</strong> is the standard model for asset prices in the Black-Scholes framework. It captures the two key stylized facts: asset prices are always positive, and log-returns have roughly constant volatility.</p>
    <p>GBM: dS/S = μdt + σdW. The solution is S(t) = S(0)exp((μ - σ²/2)t + σW(t)).</p>`,
    keyPoints: [
      "GBM is always positive (unlike arithmetic BM)",
      "Log-returns are normally distributed",
      "μ is the drift (average return), σ is volatility",
      "GBM implies log-normal price distribution",
      "The market price of risk connects real-world and risk-neutral measures"
    ],
    formula: `// GBM SDE
dS(t) = μS(t)dt + σS(t)dW(t)

// Analytical solution
S(t) = S(0) × exp((μ - σ²/2)t + σW(t))

// Log-return distribution
log(S(t)/S(0)) ~ N((μ - σ²/2)t, σ²t)`,
    python: `import numpy as np

def simulate_gbm(S0, mu, sigma, T, N, paths=1):
    """Simulate Geometric Brownian Motion analytically."""
    dt = T / N
    t = np.linspace(0, T, N+1)

    # Generate random increments
    Z = np.random.normal(0, 1, (N, paths))
    W = np.cumsum(np.sqrt(dt) * Z, axis=0)
    W = np.vstack([np.zeros((1, paths)), W])

    # GBM formula
    S = S0 * np.exp((mu - 0.5 * sigma**2) * t[:, np.newaxis] + sigma * W)

    return t, S

# Simulate stock price
t, prices = simulate_gbm(S0=100, mu=0.1, sigma=0.2, T=1, N=252, paths=1000)`,
    videos: [
      { title: "Geometric Brownian Motion", query: "geometric brownian motion finance" },
      { title: "Stock Price Simulation", query: "simulating stock prices gbm python" }
    ],
    resources: [
      { name: "Options, Futures, and Other Derivatives - Hull", url: "https://www.amazon.com/Options-Futures-Other-Derivatives-Hull/dp/013447208X" }
    ]
  },
  "2-5": {
    title: "Risk-neutral Measure (Q-measure)",
    explanation: `<strong>The risk-neutral measure (Q-measure)</strong> is a probability measure under which all discounted asset prices are martingales. It's the mathematical foundation for derivatives pricing.</p>
    <p>The key insight: while real-world investors require risk premiums, derivatives can be priced as if investors were risk-neutral. The Q-measure absorbs risk preferences, making pricing independent of risk aversion.</p>`,
    keyPoints: [
      "Under Q: discounted stock price is a martingale",
      "E^Q[S(t)] = S(0)e^(rT) (expected growth = risk-free rate)",
      "Real-world measure (P) vs risk-neutral (Q)",
      "Girsanov theorem transforms P to Q by changing drift",
      "Fundamental Theorem of Asset Pricing: no arbitrage ⇔ existence of Q"
    ],
    formula: `// Risk-neutral pricing formula
V(0) = e^(-rT) × E^Q[V(T)]

// Change of measure (Girsanov)
dW^Q = dW^P + (μ - r)/σ × dt

// Radon-Nikodym derivative
dQ/dP = exp(-θW(T) - (1/2)θ²T)  // Cameron-Martin-Girsanov`,
    python: `import numpy as np

def risk_neutral_option_price(S0, K, r, sigma, T, n_paths=100000):
    """Price European call using risk-neutral Monte Carlo."""
    # Simulate at maturity under Q-measure
    Z = np.random.normal(0, 1, n_paths)
    ST = S0 * np.exp((r - 0.5 * sigma**2) * T + sigma * np.sqrt(T) * Z)

    # Payoff
    payoff = np.maximum(ST - K, 0)

    # Discount expected payoff
    price = np.exp(-r * T) * np.mean(payoff)

    return price

# Black-Scholes call price
call_price = risk_neutral_option_price(S0=100, K=100, r=0.05, sigma=0.2, T=1)`,
    videos: [
      { title: "Risk-Neutral Pricing Explained", query: "risk neutral pricing measure finance" },
      { title: "Girsanov Theorem", query: "girsanov theorem change of measure" }
    ],
    resources: [
      { name: "Martingale Methods in Financial Modelling", url: "https://www.amazon.com/Martingale-Methods-Financial-Stochastic/dp/3642335022" }
    ]
  },
  // Phase 3: Financial Instruments (sample for key topics)
  "3-0": {
    title: "Options: Calls, Puts, Payoff Diagrams",
    explanation: `<strong>Options</strong> are contracts that give the holder the right, but not obligation, to buy (call) or sell (put) an asset at a specified price (strike) on or before a specified date (expiry).</p>
    <p>Call option: profit when asset price rises above strike. Put option: profit when asset price falls below strike.</p>
    <p>Options are the building blocks of modern finance - used for speculation, hedging, and constructing complex payoff profiles.</p>`,
    keyPoints: [
      "Call payoff: max(S_T - K, 0) - premium paid",
      "Put payoff: max(K - S_T, 0) - premium paid",
      "European options: only exercisable at expiry",
      "American options: exercisable any time before expiry",
      "In-the-money (ITM), at-the-money (ATM), out-of-the-money (OTM)"
    ],
    formula: `// European Call Payoff
C_T = max(S_T - K, 0)

// European Put Payoff
P_T = max(K - S_T, 0)

// Put-Call Parity
C - P = S - Ke^(-rT)`,
    python: `import numpy as np
import matplotlib.pyplot as plt

# Payoff diagrams
K = 100  # Strike price
S_range = np.linspace(70, 130, 100)

# Call payoff
call_payoff = np.maximum(S_range - K, 0)

# Put payoff
put_payoff = np.maximum(K - S_range, 0)

# Straddle (call + put)
straddle = call_payoff + put_payoff

plt.figure(figsize=(10, 4))
plt.plot(S_range, call_payoff, label='Call')
plt.plot(S_range, put_payoff, label='Put')
plt.plot(S_range, straddle, label='Straddle')
plt.axhline(y=0, color='black', linestyle='-', linewidth=0.5)
plt.axvline(x=K, color='gray', linestyle='--', alpha=0.5)
plt.legend()
plt.title('Option Payoff Diagrams')
plt.xlabel('Stock Price at Expiry')
plt.ylabel('Payoff')
plt.grid(True, alpha=0.3)`,
    videos: [
      { title: "Options Basics", query: "options trading basics calls puts explained" },
      { title: "Payoff Diagrams", query: "option payoff diagram tutorial" }
    ],
    resources: [
      { name: "Investopedia Options Guide", url: "https://www.investopedia.com/options-essentials-4689750" }
    ]
  },
  "3-1": {
    title: "Black-Scholes Formula & PDE Derivation",
    explanation: `<strong>The Black-Scholes formula</strong> provides a closed-form solution for European option prices. It's one of the most important results in quantitative finance, earning Fischer Black and Myron Scholes the Nobel Prize in Economics (Merton as well).</p>
    <p>The formula is derived by constructing a riskless portfolio of the option and underlying, then applying Itô's lemma and the no-arbitrage principle.</p>`,
    keyPoints: [
      "Assumptions: no dividends, constant volatility, no transaction costs, continuous trading",
      "The formula involves d1 and d2 under the normal CDF",
      "Put price obtained via put-call parity",
      "Delta, gamma, theta, vega, rho are the Greeks",
      "The formula revolutionized derivatives pricing"
    ],
    formula: `// Black-Scholes Call Price
C = S₀N(d₁) - Ke^(-rT)N(d₂)

// Where:
d₁ = [ln(S₀/K) + (r + σ²/2)T] / (σ√T)
d₂ = d₁ - σ√T

// Black-Scholes PDE
∂V/∂t + (1/2)σ²S²(∂²V/∂S²) + rS(∂V/∂S) - rV = 0`,
    python: `from scipy.stats import norm
import numpy as np

def black_scholes_call(S, K, r, sigma, T):
    """Calculate Black-Scholes European call price."""
    d1 = (np.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma*np.sqrt(T))
    d2 = d1 - sigma*np.sqrt(T)

    call = S*norm.cdf(d1) - K*np.exp(-r*T)*norm.cdf(d2)
    return call

def black_scholes_put(S, K, r, sigma, T):
    """Calculate Black-Scholes European put price."""
    d1 = (np.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma*np.sqrt(T))
    d2 = d1 - sigma*np.sqrt(T)

    put = K*np.exp(-r*T)*norm.cdf(-d2) - S*norm.cdf(-d1)
    return put

# Example
S, K, r, sigma, T = 100, 100, 0.05, 0.2, 1
call_price = black_scholes_call(S, K, r, sigma, T)
print(f"Call Price: {call_price:.2f}")`,
    videos: [
      { title: "Black-Scholes Formula Explained", query: "black scholes formula derivation explained" },
      { title: "Black-Scholes PDE", query: "black scholes partial differential equation" }
    ],
    resources: [
      { name: "Black and Scholes (1972) Original Paper", url: "https://www.jstor.org/stable/1831029" }
    ]
  },
  "3-2": {
    title: "Greeks: Delta, Gamma, Vega, Theta, Rho",
    explanation: `<strong>The Greeks</strong> measure the sensitivity of an option's price to various factors. They're essential for hedging, risk management, and understanding option behavior.</p>
    <p><strong>Delta (Δ)</strong>: sensitivity to underlying price. <strong>Gamma (Γ)</strong>: rate of change of delta. <strong>Vega (ν)</strong>: sensitivity to volatility. <strong>Theta (Θ)</strong>: time decay. <strong>Rho (ρ)</strong>: sensitivity to interest rate.</p>`,
    keyPoints: [
      "Delta ranges from 0 to 1 for calls, -1 to 0 for puts",
      "Delta hedging creates gamma-neutral positions",
      "Vega is always positive for vanilla options",
      "Theta is usually negative (options lose value over time)",
      "Rho is often small except for long-dated options"
    ],
    formula: `// Black-Scholes Greeks
Δ_call = N(d₁)
Δ_put = N(d₁) - 1

Γ = N'(d₁) / (Sσ√T)

ν = SN'(d₁)√T

Θ_call = -(S N'(d₁)σ)/(2√T) - rKe^(-rT)N(d₂)
Θ_put = -(S N'(d₁)σ)/(2√T) + rKe^(-rT)N(-d₂)`,
    python: `from scipy.stats import norm
import numpy as np

def bs_greeks(S, K, r, sigma, T):
    d1 = (np.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma*np.sqrt(T))
    d2 = d1 - sigma*np.sqrt(T)

    delta = norm.cdf(d1)
    gamma = norm.pdf(d1) / (S * sigma * np.sqrt(T))
    vega = S * norm.pdf(d1) * np.sqrt(T)
    theta = -(S * norm.pdf(d1) * sigma) / (2*np.sqrt(T)) - r*K*np.exp(-r*T)*norm.cdf(d2)
    rho = K * T * np.exp(-r*T) * norm.cdf(d2)

    return {'delta': delta, 'gamma': gamma, 'vega': vega, 'theta': theta, 'rho': rho}

greeks = bs_greeks(S=100, K=100, r=0.05, sigma=0.2, T=1)
print(greeks)`,
    videos: [
      { title: "Option Greeks Explained", query: "option greeks delta gamma vega theta explained" },
      { title: "Greeks in Trading", query: "option greeks trading hedging" }
    ],
    resources: [
      { name: "Options, Futures, and Other Derivatives - Hull", url: "https://www.amazon.com/Options-Futures-Other-Derivatives-Hull/dp/013447208X" }
    ]
  },
  // Add more learning materials for remaining topics...
};

// ═══════════════════════════════════════════════════════════════
// APPLICATION STATE
// ═══════════════════════════════════════════════════════════════

let aid = parseInt(localStorage.getItem('qdt-aid')||'1');

// Storage
const gP  = id => parseInt(localStorage.getItem('qdt-p-'+id)||'0');
const sP  = (id,v) => localStorage.setItem('qdt-p-'+id, v);
const isC = (pid,i) => localStorage.getItem(`qdt-c-${pid}-${i}`)==='1';
const tC  = (pid,i) => {
  const k=`qdt-c-${pid}-${i}`;
  localStorage.setItem(k, isC(pid,i)?'0':'1');
};
const cCnt = (pid,len) => { let c=0; for(let i=0;i<len;i++) if(isC(pid,i)) c++; return c; };
const totC = () => PH.reduce((a,p)=>{ let c=0; for(let i=0;i<p.topics.length;i++) if(isC(p.id,i)) c++; return a+c; },0);
const totT = () => PH.reduce((a,p)=>a+p.topics.length, 0);
const ovPg = () => Math.round(PH.reduce((a,p)=>a+gP(p.id),0)/PH.length);

// Book icon SVG
const BOOK_ICON = `<svg viewBox="0 0 24 24"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 16.27V9.09l7 3.5v7.18l-7-3.5zm9 3.5v-7.18l7-3.5v7.18l-7 3.5z"/></svg>`;

// Countdown to Sept 1 2026
function setCountdown() {
  const diff = Math.max(0, Math.ceil((new Date('2026-09-01')-new Date())/(864e5)));
  document.getElementById('hdr-d').textContent = diff;
}

// Sidebar
function renderSB() {
  document.getElementById('sb-list').innerHTML = PH.map(p => {
    const pg = gP(p.id), on = p.id===aid;
    return `<div class="pc${on?' on':''}" onclick="pick(${p.id})">
      <div class="pc-n">PHASE ${String(p.id).padStart(2,'0')}</div>
      <div class="pc-nm" style="${on?`color:${p.col}`:''}">
        ${on ? `<span style="color:${p.col}">▸ </span>` : ''}${p.sh}
      </div>
      <div class="pc-mo">${p.mo}</div>
      <div class="pc-br">
        <div class="pc-bt"><div class="pc-bf" style="width:${pg}%;background:${p.col}"></div></div>
        <div class="pc-bp">${pg}%</div>
      </div>
    </div>`;
  }).join('');
}

// Detail
function renderDet() {
  console.log('[QDT] renderDet called, aid:', aid);
  const p = PH.find(x=>x.id===aid);
  if (!p) {
    console.log('[QDT] Phase not found for aid:', aid);
    return;
  }
  const pg = gP(p.id);
  const cc = cCnt(p.id, p.topics.length);
  const tag = p.mo.includes('parallel') ? 'PARALLEL' : 'SEQUENTIAL';

  console.log('[QDT] Rendering topics, count:', p.topics.length);
  const tpHtml = p.topics.map((t,i) => {
    const c = isC(p.id,i);
    return `<div class="ti${c?' ck':''}" onclick="tTog(${p.id},${i},this)">
      <div class="tcb"></div>
      <div class="ttx">${t}</div>
      <div class="ti-book" onclick="event.stopPropagation(); openLearningMaterial(${p.id},${i})" title="Learning Materials">
        ${BOOK_ICON}
      </div>
    </div>`;
  }).join('');
  console.log('[QDT] tpHtml length:', tpHtml.length);

  document.getElementById('det').innerHTML = `
    <div class="det-hd fu">
      <div class="det-pn">PHASE ${String(p.id).padStart(2,'0')} · ${tag}</div>
      <div class="det-ttl" style="color:${p.col}">${p.nm}</div>
      <div class="det-dsc">${p.ds}</div>
      <div class="det-mt">
        <span>${p.mo}</span>
        <span>·</span>
        <span>${p.topics.length} topics</span>
        <span>·</span>
        <span><span class="v" id="cc-${p.id}">${cc}</span> completed</span>
      </div>
    </div>
    <div class="prog-row">
      <span class="prog-lbl">Progress</span>
      <input type="range" min="0" max="100" value="${pg}" style="--thumb:${p.col}"
        oninput="updP(${p.id},this.value)">
      <div class="prog-val" id="pv-${p.id}" style="color:${p.col}">${pg}%</div>
    </div>
    <div class="topics-wrap">
      <div class="sec-lbl">
        Topics
        <span class="cnt" id="tc-${p.id}">${cc}/${p.topics.length}</span>
      </div>
      <div class="tgrid fu" id="debug-tgrid">${tpHtml}</div>
    </div>
    <div class="mile-sec">
      <div class="mile-box"><b>Key milestone</b>${p.milestone}</div>
      <div class="lev-box"><b>Your edge</b>${p.leverage}</div>
    </div>`;
  console.log('[QDT] InnerHTML set, tgrid children:', document.getElementById('debug-tgrid')?.children.length);

  document.getElementById('res-ph').textContent = p.sh;
  document.getElementById('res-list').innerHTML = p.res.map(r=>`<div class="res-i">${r}</div>`).join('');
}

// Skills
function renderSK() {
  document.getElementById('sk-list').innerHTML = SKILL_DEFS.map(s => {
    const pg = s.pids ? Math.round(s.pids.reduce((a,id)=>a+gP(id),0)/s.pids.length) : gP(s.pid);
    const col = PH.find(p=>p.id===(s.pid||s.pids[0])).col;
    return `<div class="sk-row">
      <div class="sk-top"><span class="sk-nm">${s.nm}</span><span class="sk-pt">${pg}%</span></div>
      <div class="sk-tr"><div class="sk-fl skill-fill-anim" style="width:${pg}%;background:${col}"></div></div>
    </div>`;
  }).join('');
}

// Stats
function renderStats() {
  document.getElementById('st-done').textContent = totC();
  document.getElementById('st-tot').textContent  = totT();
  document.getElementById('st-act').textContent  = PH.filter(p=>gP(p.id)>0).length;
}

// Header update
function updHdr() {
  const op = ovPg();
  document.getElementById('hdr-pf').style.width = op+'%';
  document.getElementById('hdr-pct').textContent = op+'%';
  document.getElementById('hdr-ph').textContent  = (PH.find(p=>p.id===aid)||{sh:'—'}).sh;
  document.getElementById('hdr-tp').textContent  = `${totC()} / ${totT()}`;
}

// Timeline
function renderTL() {
  const mths = document.getElementById('tl-mths');
  const rows = document.getElementById('tl-rows');
  const leg  = document.getElementById('tl-leg');

  mths.innerHTML = Array.from({length:TOTAL},(_,i)=>`<div class="tl-m">M${i+1}</div>`).join('');

  rows.innerHTML = '';
  PH.forEach(p => {
    const row = document.createElement('div');
    row.className = 'tl-row';
    const b = document.createElement('div');
    b.className = `tl-blk${p.id===aid?' on':''}`;
    b.style.left  = ((p.start-1)/TOTAL*100)+'%';
    b.style.width = (p.dur/TOTAL*100)+'%';
    b.style.background = p.col;
    b.title = p.nm;
    b.onclick = ()=>pick(p.id);
    row.appendChild(b);
    rows.appendChild(row);
  });

  leg.innerHTML = PH.map(p =>
    `<div class="tl-leg-item">
      <div class="tl-leg-dot" style="background:${p.col}"></div>
      <span>${String(p.id).padStart(2,'0')} ${p.sh}</span>
    </div>`
  ).join('');
}

// Events
function pick(id) {
  aid = id;
  localStorage.setItem('qdt-aid', id);
  renderSB(); renderDet(); renderSK(); renderStats(); updHdr(); renderTL();
}

function updP(id, val) {
  val = parseInt(val);
  sP(id, val);
  const pvEl = document.getElementById('pv-'+id);
  if (pvEl) pvEl.textContent = val+'%';
  renderSB(); renderSK(); renderStats(); updHdr(); renderTL();
}

function tTog(pid, idx, el) {
  tC(pid, idx);
  el.classList.toggle('ck');
  const p = PH.find(x=>x.id===pid);
  const cc = cCnt(pid, p.topics.length);
  const ccEl = document.getElementById('cc-'+pid);
  const tcEl = document.getElementById('tc-'+pid);
  if (ccEl) ccEl.textContent = cc;
  if (tcEl) tcEl.textContent = `${cc}/${p.topics.length}`;

  // Auto-update progress bar based on checkbox completion
  const newProgress = Math.round((cc / p.topics.length) * 100);
  sP(pid, newProgress);
  const pvEl = document.getElementById('pv-'+pid);
  if (pvEl) {
    pvEl.textContent = newProgress + '%';
    const slider = pvEl.parentElement.querySelector('input');
    if (slider) slider.value = newProgress;
  }

  renderSB(); renderSK(); renderStats(); updHdr(); renderTL();
}

// ═══════════════════════════════════════════════════════════════
// LEARNING MATERIALS MODAL
// ═══════════════════════════════════════════════════════════════

function openLearningMaterial(phaseId, topicIndex) {
  const key = `${phaseId}-${topicIndex}`;
  const material = LEARNING_MATERIALS[key];

  if (!material) {
    // Show placeholder for topics without detailed materials
    const phase = PH.find(p => p.id === phaseId);
    const topicName = phase ? phase.topics[topicIndex] : 'Unknown Topic';
    showPlaceholderModal(phaseId, topicIndex, topicName);
    return;
  }

  const modal = document.getElementById('lm-modal');
  const title = document.getElementById('lm-title');
  const body = document.getElementById('lm-body');

  title.textContent = material.title;

  let html = '';

  // Explanation
  if (material.explanation) {
    html += `
      <div class="lm-section">
        <div class="lm-section-title">Concept Overview</div>
        <div class="lm-explanation">${material.explanation}</div>
      </div>`;
  }

  // Key Points
  if (material.keyPoints && material.keyPoints.length > 0) {
    html += `
      <div class="lm-section">
        <div class="lm-section-title">Key Points</div>
        <ul class="lm-key-points">
          ${material.keyPoints.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>`;
  }

  // Formula
  if (material.formula) {
    html += `
      <div class="lm-section">
        <div class="lm-section-title">Mathematical Formulation</div>
        <div class="lm-formula">${material.formula}</div>
      </div>`;
  }

  // Python Code
  if (material.python) {
    html += `
      <div class="lm-section">
        <div class="lm-section-title">Python Implementation</div>
        <pre class="lm-code-example">${escapeHtml(material.python)}</pre>
      </div>`;
  }

  // YouTube Videos
  if (material.videos && material.videos.length > 0) {
    html += `
      <div class="lm-section">
        <div class="lm-section-title">Video Resources</div>
        <div class="lm-video-grid">
          ${material.videos.map(v => `
            <div class="lm-video-card">
              <div class="lm-video-title">${v.title}</div>
              <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(v.query)}"
                 target="_blank"
                 class="lm-video-link">
                <svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                Search YouTube
              </a>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  // Resources
  if (material.resources && material.resources.length > 0) {
    html += `
      <div class="lm-section">
        <div class="lm-section-title">Further Reading</div>
        <ul class="lm-resource-list">
          ${material.resources.map(r => `
            <li><a href="${r.url}" target="_blank">${r.name}</a></li>
          `).join('')}
        </ul>
      </div>`;
  }

  body.innerHTML = html;
  modal.classList.add('active');
}

function showPlaceholderModal(phaseId, topicIndex, topicName) {
  const modal = document.getElementById('lm-modal');
  const title = document.getElementById('lm-title');
  const body = document.getElementById('lm-body');

  title.textContent = topicName;

  body.innerHTML = `
    <div class="lm-section">
      <div class="lm-section-title">Overview</div>
      <div class="lm-explanation">
        <strong>${topicName}</strong> is an important topic in this phase of your quantitative finance journey.
        Detailed learning materials are being developed for this topic.
      </div>
    </div>
    <div class="lm-section">
      <div class="lm-section-title">General Resources</div>
      <div class="lm-video-grid">
        <div class="lm-video-card">
          <div class="lm-video-title">Search YouTube for tutorials</div>
          <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(topicName + ' quantitative finance')}"
             target="_blank"
             class="lm-video-link">
            <svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            Search YouTube
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeLearningModal() {
  const modal = document.getElementById('lm-modal');
  modal.classList.remove('active');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLearningModal();
  }
});

// Close modal on background click
document.getElementById('lm-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeLearningModal();
  }
});

// ═══════════════════════════════════════════════════════════════
// SUPABASE INTEGRATION (Prepared)
// ═══════════════════════════════════════════════════════════════

// Supabase configuration placeholder
const SUPABASE_URL = localStorage.getItem('supabase-url') || '';
const SUPABASE_KEY = localStorage.getItem('supabase-key') || '';

function updateConnectionStatus(status) {
  const indicator = document.querySelector('.conn-indicator');
  const text = document.getElementById('conn-text');

  indicator.className = 'conn-indicator ' + status;

  switch(status) {
    case 'online':
      text.textContent = 'Supabase Connected';
      break;
    case 'syncing':
      text.textContent = 'Syncing...';
      break;
    case 'offline':
      text.textContent = 'Local Mode';
      break;
  }
}

// Initialize
try {
  console.log('[QDT] aid value:', aid);
  console.log('[QDT] PH array length:', PH.length);
  console.log('[QDT] PH phase IDs:', PH.map(p => p.id));
  const foundPhase = PH.find(p=>p.id===aid);
  console.log('[QDT] Found phase:', foundPhase ? foundPhase.sh : 'NOT FOUND');
  setCountdown();
  renderSB(); renderDet(); renderSK(); renderStats(); updHdr(); renderTL();
  console.log('[QDT] Initialization complete');
  // Add visible confirmation that JS ran
  document.getElementById('hdr-pct').textContent = 'JS OK';
} catch(e) {
  console.error('[QDT] Error during initialization:', e);
  document.getElementById('hdr-pct').textContent = 'JS ERR';
}

// Check Supabase configuration
if (SUPABASE_URL && SUPABASE_KEY) {
  updateConnectionStatus('online');
} else {
  updateConnectionStatus('offline');
}

// Expose functions to global scope for inline HTML handlers
window.pick = pick;
window.updP = updP;
window.tTog = tTog;
window.openLearningMaterial = openLearningMaterial;
window.closeLearningModal = closeLearningModal;
