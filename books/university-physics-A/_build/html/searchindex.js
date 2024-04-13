Search.setIndex({"docnames": ["Module-A1/Numerical-methods", "Module-A1/Numerical-methods-practice", "Module-A1/Project-1-Covid-19", "Module-A1/Project-2-Artillery", "Module-A1/Taylor-expansions", "Module-A2/angular-momentum", "Module-A2/problemsA2", "Module-A2/translational-rotational", "Module-A3/flux", "Module-A3/mass-distributions", "Module-A3/newton-law-gravity", "Module-A3/problemsA3", "Module-A4/problemsA4", "Module-A5/problemsA5", "intro"], "filenames": ["Module-A1/Numerical-methods.ipynb", "Module-A1/Numerical-methods-practice.ipynb", "Module-A1/Project-1-Covid-19.ipynb", "Module-A1/Project-2-Artillery.ipynb", "Module-A1/Taylor-expansions.ipynb", "Module-A2/angular-momentum.ipynb", "Module-A2/problemsA2.ipynb", "Module-A2/translational-rotational.ipynb", "Module-A3/flux.ipynb", "Module-A3/mass-distributions.ipynb", "Module-A3/newton-law-gravity.ipynb", "Module-A3/problemsA3.ipynb", "Module-A4/problemsA4.ipynb", "Module-A5/problemsA5.ipynb", "intro.md"], "titles": ["A1.2 Numerical Integration: Finite Difference Methods", "A1.3 Numerical Methods - Practice", "A1.4 Realistic Projectile Motion Project 1: Covid-19", "A1.5 Realistic Projectile Motion Project 2: Artillery", "A1.1 Taylor Expansions", "A2.1 Angular Momentum Revisited", "A2.x Problems", "A2.2 A Note on Combined Translational and Rotational Angular Speed", "A3.3 Field Flux", "A3.2 Newton\u2019s Law of Gravity -  Mass Distributions", "A3.1 Newton\u2019s Law of Gravity", "A3.X Problems", "A4.x Problems", "A5.x Problems", "A Competency Approach to University Physics I: A Compendium to the A Exam"], "terms": {"we": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10], "see": [0, 2, 4, 6, 7, 8, 9], "mani": [0, 1, 4, 6, 9, 12], "exampl": [0, 1, 4, 5, 9], "encount": [0, 8], "physic": [0, 4, 5, 6, 8], "i": [0, 1, 2, 4, 5, 6, 8, 9, 11], "come": 0, "assumpt": 0, "make": [0, 2, 3, 4, 5, 6, 8, 9, 10, 12], "them": [0, 1, 2], "less": [0, 2, 4], "applic": [0, 1, 4], "everydai": 0, "life": [0, 1, 2, 4], "while": [0, 1, 2, 6, 7, 10], "ar": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 13], "great": [0, 3], "illustr": [0, 4, 9], "import": [0, 2, 4, 5, 6, 8, 9, 10, 11], "concept": [0, 4, 5, 8], "thei": [0, 6, 8, 9, 10], "fail": 0, "provid": [0, 5, 7], "accur": 0, "predict": 0, "real": [0, 1], "when": [0, 1, 4, 5, 7, 10], "valid": [0, 10], "our": [0, 1, 2, 4, 5, 6, 10], "problem": [0, 1, 4, 9], "often": [0, 1, 4, 9], "becom": [0, 2, 3, 4, 9], "too": [0, 4], "difficult": [0, 2], "obtain": [0, 4, 9], "exact": [0, 4, 7], "solut": [0, 1, 2, 4], "best": 0, "effort": 0, "approxim": [0, 1, 2, 3, 4, 8], "correct": [0, 13], "within": [0, 2, 4, 10], "set": [0, 2, 4, 8, 12, 14], "accept": [0, 9], "error": [0, 1, 4], "margin": 0, "As": [0, 4], "an": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13], "newton": [0, 8], "s": [0, 1, 2, 3, 5, 6, 7, 12, 13], "second": [0, 2, 4, 6, 10], "law": [0, 1], "differenti": [0, 1, 2, 9], "equat": [0, 4, 6, 8, 9, 10, 12], "which": [0, 1, 2, 4, 5, 7, 8, 9, 10, 12], "non": [0, 4, 5], "onli": [0, 2, 4, 9], "solveabl": 0, "through": [0, 1, 2, 4, 5, 8, 13], "under": [0, 5, 9], "certain": [0, 4, 9], "situat": [0, 11], "can": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12], "transform": [0, 2], "coupl": [0, 1, 2], "solv": [0, 2, 4, 6, 10], "The": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "object": [0, 3, 6, 7, 8, 9, 10, 12], "thi": [0, 1, 2, 4, 5, 6, 7, 9, 10, 12, 13, 14], "note": [0, 4, 8, 9, 10, 14], "scheme": [0, 2], "known": [0, 2, 4, 8, 10], "let": [0, 2, 4, 7, 8, 9], "us": [0, 1, 2, 4, 6, 7, 8, 9, 10, 13], "consid": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13], "graphic": [0, 4], "setup": 0, "below": [0, 2, 4, 6, 7, 8, 9, 11], "assum": [0, 1, 2, 3, 5, 12], "have": [0, 1, 2, 4, 5, 7, 8, 9, 10, 12], "knowledg": [0, 1, 9], "data": [0, 1], "point": [0, 1, 4, 7, 8, 10, 11], "coordin": [0, 7, 9], "x_0": [0, 1], "f": [0, 1, 2, 4, 5, 6, 9, 10, 11, 13], "function": [0, 1, 3, 4, 8, 10, 13], "x": [0, 1, 2, 4, 5, 7, 9, 10], "desir": [0, 1, 2], "about": [0, 1, 2, 4, 5, 7, 9, 10], "p": [0, 5, 9, 11], "close": [0, 2, 4, 8, 10], "proxim": [0, 2, 4], "In": [0, 1, 2, 3, 4, 5, 8, 9], "figur": [0, 2, 4, 6, 7, 8], "blue": [0, 4, 8], "line": [0, 2, 4, 5, 7, 9, 11, 13], "repres": [0, 2, 4], "red": [0, 4], "tangent": 0, "represent": [0, 4], "think": [0, 9], "intercept": 0, "rise": 0, "form": [0, 2, 4, 9, 13], "y": [0, 2, 3, 5, 9, 11, 13], "A": [0, 2, 4, 5, 6, 8, 9, 11, 12, 13], "bx": 0, "l": [0, 5], "left": [0, 1, 2, 3, 4, 7, 9, 10, 13], "frac": [0, 1, 2, 3, 4, 8, 9, 10, 11, 13], "df": [0, 1, 2, 4, 10], "dx": [0, 1, 2, 4, 6, 9], "right": [0, 1, 2, 3, 4, 6, 9, 13], "_": [0, 4, 5, 10], "tag": [0, 1, 2, 4, 8, 9], "If": [0, 1, 2, 4, 6, 7, 8, 9, 10, 12], "call": [0, 4, 5], "from": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "guess": 0, "introduc": [0, 5, 8], "good": 0, "veri": [0, 2, 4, 9], "would": [0, 10], "how": [0, 2, 4, 6, 8, 10, 11, 12, 13], "big": 0, "more": [0, 2, 4, 5, 7, 8, 9], "rigor": [0, 4], "approach": [0, 1, 2, 4, 9], "next": [0, 1, 2, 4, 8], "help": [0, 8], "calculu": [0, 4], "tell": 0, "well": [0, 1, 2, 4, 5, 8, 9, 10], "behav": [0, 4, 9, 11], "written": [0, 1, 4], "sum": [0, 4], "infinit": [0, 4, 10, 11], "polynomi": [0, 4], "inform": [0, 4, 9], "some": [0, 1, 4, 7, 9, 10], "d": [0, 1, 2, 4, 8, 9, 10], "cdot": [0, 4, 8, 10], "With": [0, 4, 9], "notat": [0, 1], "abov": [0, 1, 2, 4, 5, 6, 7, 8, 9], "discuss": 0, "so": [0, 1, 2, 4, 6, 9], "re": [0, 8], "write": [0, 1, 5, 8, 9, 12], "inst": 0, "am": [0, 2, 4, 9], "sinc": [0, 2, 8, 9], "familiar": [0, 4, 7], "delta": [0, 1, 2], "get": [0, 1, 2, 6], "At": [0, 1, 5, 7, 12], "done": [0, 1, 2, 9, 10], "anyth": 0, "other": [0, 1, 2, 4, 6, 8, 10, 12, 13], "than": [0, 6, 7, 8, 10], "howev": [0, 1, 2, 8], "mai": [0, 1, 2, 3, 4, 5, 7, 9], "evid": [0, 2, 7], "now": [0, 1, 2, 4, 7, 8, 9, 12], "hand": 0, "side": [0, 1, 4], "evalu": [0, 1, 9], "ahead": 0, "That": [0, 9, 10], "actual": [0, 4, 9], "pretti": [0, 1, 4], "cool": [0, 1], "feel": 0, "overwhelm": 0, "pleas": 0, "do": [0, 1, 2, 4], "panic": 0, "show": [0, 2, 4, 6, 8, 10, 11], "step": [0, 1, 2, 9], "toward": 0, "numerical": 0, "those": [0, 2, 9], "you": [0, 2, 4, 8, 12, 13], "confid": [0, 4], "what": [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13], "behind": 0, "door": 0, "focu": [0, 9], "class": [0, 4], "appli": [0, 1, 2, 4, 6, 9, 10], "yet": [0, 2], "just": [0, 2, 4, 5, 10], "plain": 0, "arithmet": 0, "subract": 0, "both": [0, 1, 5, 6, 8], "divid": [0, 9], "all": [0, 1, 2, 4, 7, 8, 9], "term": [0, 2, 4, 8, 9, 10], "express": [0, 2, 6, 9], "includ": [0, 1, 2, 3, 4, 7, 9], "deriv": [0, 1, 2, 4, 6, 10], "simpli": [0, 5, 7, 8], "refer": [0, 5, 10, 11], "fact": [0, 3, 4, 7], "limit": [0, 2, 9], "number": [0, 2, 13], "sim": [0, 1, 2, 4, 8], "notic": [0, 3, 7], "chang": [0, 1, 5, 8], "also": [0, 2, 5, 7, 8, 9, 10], "similar": [0, 2, 4, 5], "one": [0, 1, 2, 6, 8, 9, 10, 12, 13], "element": [0, 2, 4, 8], "two": [0, 1, 2, 4, 6, 8, 9, 10, 12, 13], "apart": 0, "wherea": 0, "wa": [0, 2], "unknown": [0, 1], "expans": 0, "magnitud": [0, 2, 4, 7, 8, 10], "estim": [0, 2, 4], "each": [0, 1, 2, 4, 12], "success": 0, "smaller": [0, 1, 2, 3], "previou": [0, 5, 9], "requir": [0, 1, 4, 6, 14], "converg": [0, 4], "largest": 0, "ignor": [0, 2, 4], "henc": [0, 1, 8], "mathcal": [0, 4], "o": [0, 4], "read": [0, 4], "professor": 0, "why": [0, 6, 7], "go": [0, 2, 12, 13], "lengthi": 0, "run": 0, "simplest": 0, "could": [0, 5, 9, 10], "further": [0, 8], "down": [0, 6, 8, 9], "box": [0, 1, 4, 5, 7, 8, 9, 10], "exercis": [0, 6], "process": [0, 1, 2], "my": 0, "textbook": [0, 2], "need": [0, 1, 2, 4, 8, 9, 13], "know": [0, 1, 8, 9], "becaus": 0, "realist": 0, "wai": [0, 5, 8], "physicist": 0, "engin": [0, 4, 12, 13], "far": [0, 6, 9, 10, 12, 13], "alwai": [0, 7], "friction": [0, 1, 3, 6, 7, 12], "properti": 0, "materi": [0, 14], "softwar": 0, "deal": [0, 1], "discret": 0, "math": 0, "game": 0, "full": [0, 9], "It": [0, 1, 2, 6, 7, 8, 9], "lai": [0, 5], "section": [0, 2, 9], "updat": [0, 1, 2], "valu": [0, 1, 3, 4, 6, 8], "base": [0, 5, 9, 10], "conveni": 0, "subscript": [0, 1, 2], "intuit": [0, 7], "respect": [0, 2, 5, 13], "implement": [0, 2], "comput": [0, 1, 2, 4, 9], "script": [0, 2, 4], "x_": [0, 2], "x_i": 0, "f_": [0, 1, 2], "f_i": [0, 1], "tool": [0, 3, 4, 8, 9], "understand": [0, 7, 8, 10], "certainli": 0, "cours": [0, 2, 4, 8], "essenti": [0, 8], "given": [0, 1, 3, 5, 6, 7, 8, 9, 11, 12], "singl": [0, 2, 5], "model": [0, 1, 2, 3, 13], "simpl": [0, 4, 12], "analyt": [0, 2], "demonstr": 0, "follow": [0, 1, 2, 3, 5, 6, 7, 8, 9], "condit": [0, 1, 2, 8], "y_0": 0, "0": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "dy": [0, 2], "find": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 13], "5": [0, 1, 4, 5, 6, 7, 8, 9, 10, 12, 13], "util": [0, 4], "cast": 0, "try": [0, 2], "accord": [0, 1], "case": [0, 1, 2, 7, 9, 10], "depend": [0, 1, 2], "variabl": [0, 1], "y_": [0, 2], "y_i": 0, "start": [0, 1, 2, 6, 12], "initi": [0, 1, 2, 6, 13], "progress": 0, "chosen": [0, 10], "size": [0, 1, 2, 5, 9], "iter": [0, 1], "learn": [0, 2, 8], "proper": 0, "choic": [0, 6], "regard": [0, 4], "most": [0, 2, 8], "without": [0, 3, 6, 12], "jeopard": 0, "speed": [0, 2, 5, 6, 10, 13], "beyond": 0, "scope": 0, "replac": [0, 1, 2, 5], "got": 0, "attach": [0, 1], "reason": [0, 8], "must": [0, 2, 9, 10, 12], "convert": [0, 2], "continu": 0, "until": [0, 1], "reach": [0, 1, 3, 6], "interv": 0, "x_1": 0, "y_1": 0, "t": [0, 1, 2, 5, 7, 10, 13], "x_2": 0, "y_2": 0, "x_3": 0, "y_3": 0, "x_4": 0, "y_4": 0, "14": 0, "x_5": 0, "y_5": 0, "30": [0, 2, 6, 13], "quick": 0, "comparison": [0, 2], "between": [0, 2, 7, 8, 9, 10, 11, 12, 13], "42": 0, "quit": 0, "bit": [0, 4], "off": [0, 13], "larg": [0, 1, 2, 4], "significantli": [0, 2, 4, 10], "over": [0, 1, 2, 8, 9], "should": [0, 1, 4, 7, 10, 13], "vari": [0, 9, 10], "repeat": [0, 1, 3], "stepsiz": 0, "01": [0, 2], "hold": 0, "50": [0, 5], "time": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13], "No": 0, "dude": 0, "python": [0, 2], "rescu": 0, "numpi": [0, 2, 4, 5, 6, 8, 10], "np": [0, 2, 4, 5, 6, 8, 10], "matplotlib": [0, 2, 4, 8], "pyplot": [0, 2, 4, 8], "plt": [0, 2, 4, 8], "inlin": [0, 2, 4], "x_f": 0, "nstep": [0, 1], "int": [0, 1, 8], "rang": [0, 1, 3, 8], "print": [0, 1, 2, 5, 6, 10, 11], "str": [0, 1, 5, 6, 10], "40": [0, 5, 6, 8], "42500000000002": 0, "percent": 0, "textrm": [0, 1, 4, 8, 13], "100": [0, 12], "425": 0, "8": [0, 1, 2, 6, 10, 12, 13], "anticip": 0, "result": [0, 7, 8, 10, 13], "compar": [0, 10], "chose": 0, "visual": 0, "arang": [0, 4, 8], "append": [0, 2], "plot": [0, 2, 4, 8], "ylabel": [0, 2, 4], "xlabel": [0, 2, 4], "ax": [0, 2, 4, 6, 8], "gca": [0, 2, 4], "b": [0, 2, 3, 4, 5], "r": [0, 2, 4, 5, 6, 7, 8, 9, 10], "set_xlim": [0, 2, 4], "min": [0, 4, 10], "max": [0, 2, 4], "set_ylim": [0, 2, 4], "here": [0, 1, 2, 3, 4, 8, 9, 10, 12, 13], "isn": 0, "amaz": 0, "varieti": 0, "complex": [0, 4, 5], "otherwis": [0, 1], "cover": [0, 4, 14], "practic": 0, "end": [0, 4, 6, 13], "semest": [0, 4], "hope": [0, 4], "much": [0, 6, 8, 12], "better": [0, 4], "appreci": 0, "your": [0, 8], "turn": 0, "test": [0, 9, 10, 13], "skill": 0, "subject": [0, 9], "separ": 0, "where": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "brief": 0, "summari": 0, "sort": [0, 4], "guid": 0, "strategi": 0, "final": [0, 4, 6], "work": [0, 2, 6, 10], "backward": 0, "gain": [0, 4], "prior": 0, "combin": 0, "central": 0, "emploi": 0, "either": [0, 2, 4], "curiou": 0, "check": 0, "out": [0, 1, 2, 4, 6, 8, 9], "creat": [0, 8], "standard": [1, 2], "integr": [1, 2, 8, 9, 10, 11], "scenario": [1, 2], "acceler": [1, 2, 3, 6, 8, 12], "veloc": [1, 2, 3, 5, 6, 10, 12], "posit": [1, 2, 6, 9, 10, 12, 13], "want": [1, 9], "someth": [1, 2], "occur": 1, "interact": [1, 2, 8, 9, 10], "netwon": 1, "explor": [1, 2, 5], "forward": [1, 2], "first": [1, 2, 4, 5, 8, 9], "order": [1, 2, 4, 10], "interest": [1, 3, 8, 9], "its": [1, 2, 5, 6, 7, 8, 9, 10, 11, 12], "dt": [1, 2], "t_": 1, "t_i": 1, "index": 1, "indic": [1, 8], "altern": [1, 9], "explan": 1, "instantan": [1, 2], "slope": 1, "identifi": [1, 2, 4], "present": [1, 4, 9], "isol": 1, "rightarrow": [1, 2], "On": 1, "doe": [1, 2, 5, 6, 11, 12], "zero": [1, 4, 5, 7, 10], "algebra": 1, "choos": [1, 2], "paper": 1, "unless": 1, "state": [1, 10], "rule": [1, 9], "thumb": 1, "consider": [1, 2], "expect": [1, 4], "t_0": [1, 3], "f_0": 1, "calcul": [1, 2, 4, 8, 9, 10], "t_1": 1, "f_1": 1, "7": [1, 2, 5, 6, 8, 9, 10, 12], "insert": [1, 2, 4, 8, 9], "particl": [1, 2], "vt": 1, "direct": [1, 2, 5, 7, 8, 9], "00": [1, 3, 6, 10, 12, 13], "m": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "explicitli": 1, "dv": [1, 9], "aleradi": 1, "v_": [1, 2, 7], "4": [1, 3, 4, 6, 7, 8, 9, 10, 12, 13], "v": [1, 2, 3, 4, 5, 6, 10], "6": [1, 3, 4, 5, 6, 8, 9, 10, 12, 13], "16": [1, 5, 13], "move": [1, 2, 5, 7, 8, 10, 12], "dii": [1, 10, 11, 12, 13], "cell": [1, 10, 11, 12, 13], "t_f": 1, "150114570624213": 1, "travel": [1, 2, 5, 6, 12, 13], "tangl": 1, "up": [1, 4, 6, 8], "mathemat": [1, 4], "mess": 1, "who": [1, 2, 4], "xt": 1, "6004177607873036": 1, "same": [1, 5, 6, 7, 8, 10], "hint": [1, 4, 7, 8], "alreadi": 1, "rememb": 1, "relationship": [1, 7], "new": [1, 12, 13], "principl": 1, "eh": 1, "9": [1, 2, 6, 8, 10, 12], "468969364806515": 1, "recommend": 2, "safe": 2, "distanc": [2, 6, 7, 8, 9, 10, 11, 12], "ft": 2, "spread": 2, "sar": 2, "cov": 2, "viru": 2, "realli": [2, 9], "put": 2, "forth": 2, "scientist": 2, "bare": 2, "pass": [2, 8, 14], "kinemat": [2, 6], "allow": 2, "studi": 2, "trajectori": 2, "parameter": 2, "being": [2, 5], "vertic": [2, 6], "xy": [2, 5, 7], "plane": [2, 5, 6, 7, 11], "dictat": 2, "velocit": 2, "obvious": [2, 3], "graviti": [2, 8, 12], "act": 2, "futher": 2, "due": [2, 6, 8, 9, 12], "after": [2, 4], "leav": 2, "host": 2, "pandem": 2, "caus": 2, "predominantli": 2, "transmiss": 2, "via": 2, "talk": [2, 5, 10], "cough": 2, "effect": [2, 3], "novel": 2, "natur": [2, 10], "affect": 2, "everyon": 2, "sever": [2, 9], "death": 2, "major": 2, "peopl": 2, "exhibit": 2, "cold": 2, "like": [2, 5, 9, 10], "symptom": 2, "impli": [2, 7, 10], "clear": 2, "pictur": 2, "long": [2, 11], "catiou": 2, "behavior": 2, "social": 2, "absolut": 2, "ridicul": 2, "clearli": 2, "goal": 2, "avoid": 2, "take": [2, 6], "place": [2, 3], "phone": 2, "ha": [2, 4, 5, 6, 9, 10, 12], "capabl": 2, "transmit": 2, "coin": 2, "politician": 2, "liber": 2, "art": 2, "graduat": 2, "ment": 2, "joke": 2, "noth": [2, 10], "againt": 2, "career": 2, "educ": 2, "okai": 2, "last": 2, "anoth": [2, 6], "among": [2, 10], "arrog": 2, "terminolog": 2, "still": 2, "mindboggl": 2, "me": [2, 8], "measur": [2, 8, 13], "appar": 2, "feet": 2, "hei": 2, "attempt": [2, 9], "vec": [2, 5, 6, 8, 9, 10, 11], "a_x": 2, "a_i": 2, "unfortun": 2, "finit": 2, "differ": 2, "de": 2, "give": [2, 5], "four": [2, 8], "dv_x": 2, "dv_y": 2, "v_x": 2, "v_y": 2, "finiti": 2, "perform": [2, 6, 8], "propag": [2, 13], "a_": [2, 3, 8], "g": [2, 4, 6, 8, 9, 10, 11, 12], "constant": [2, 4, 6, 8, 9, 10, 12], "purpos": 2, "incorpor": 2, "These": 2, "rel": [2, 5, 7, 9], "high": [2, 3, 6], "appropri": [2, 3], "rho": [2, 3, 8, 9], "c_": 2, "densiti": [2, 3, 8, 9], "ga": 2, "fluid": 2, "c_d": 2, "coeffici": [2, 6, 12], "shape": [2, 5], "cross": 2, "area": [2, 3, 8], "mass": [2, 5, 6, 7, 8, 10, 11, 12], "system": [2, 4, 9, 10, 12], "upward": 2, "angl": [2, 4, 6, 8], "theta": [2, 8, 9], "ccw": [2, 5], "axi": [2, 5, 9, 11], "co": [2, 4, 8, 13], "For": [2, 4, 5, 7, 8, 10], "simplifi": [2, 7, 9], "vv_x": 2, "similarli": [2, 4, 9], "vv_y": 2, "iterativ": 2, "account": 2, "sign": 2, "specif": [2, 4], "few": [2, 10], "paramet": 2, "rho_": [2, 3], "28": 2, "kg": [2, 5, 6, 7, 8, 10, 12], "47": 2, "sqrt": [2, 4, 6, 10, 11], "befor": [2, 6, 12], "determin": [2, 5, 9], "address": [2, 3], "embed": 2, "larger": 2, "respiratori": 2, "individu": 2, "15": [2, 10], "mu": 2, "05": [2, 5], "ml": 2, "onlin": 2, "kda": 2, "kilo": 2, "dalton": 2, "pi": [2, 4, 5, 6, 8, 10, 11, 13], "found": [2, 4, 12], "volum": [2, 6, 9], "spheric": [2, 8, 9, 10], "excel": 2, "sheet": 2, "height": [2, 6, 13], "averag": 2, "adult": 2, "person": 2, "70": 2, "eject": 2, "horizont": [2, 6, 12], "defin": [2, 5, 8, 9], "81": [2, 6, 8], "rho_air": 2, "0e": 2, "rho_droplet": 2, "1000": [2, 3, 8], "vx": 2, "vy": 2, "x_arr": 2, "y_arr": 2, "ay": [2, 3], "titl": 2, "axvlin": 2, "83": 2, "linestyl": [2, 4], "color": [2, 4], "k": [2, 3, 4, 9], "dash": [2, 7], "drop": 2, "miss": 2, "resporatori": 2, "normal": [2, 8], "0e3": 2, "66e": [2, 10], "24": [2, 4, 5, 8], "break": 2, "157710": 2, "47457780084": 2, "var": 2, "folder": 2, "74": 2, "jtxzz5d9637f574hh5cmbq240000gn": 2, "ipykernel_9344": [], "1728733566": 2, "py": 2, "62": 2, "userwarn": 2, "ident": [2, 6], "low": 2, "xlim": 2, "singular": 2, "automat": 2, "expand": [2, 4], "statement": 2, "code": [2, 8], "remov": [2, 12], "happen": 2, "ratio": [2, 6], "net": [2, 9], "surpris": 2, "suitabl": 2, "fine": 2, "erron": 2, "wrong": 2, "influenc": 2, "current": 2, "suspend": 2, "hour": 2, "contain": 2, "thousand": 2, "viruss": 2, "meter": [2, 12], "mask": 2, "prevent": [2, 3], "therefor": [2, 3, 8], "sourc": [2, 8, 9, 10], "migit": 2, "itself": 2, "additon": 2, "properli": 2, "tang": 2, "j": [2, 9], "w": [2, 5, 6, 10], "et": 2, "al": 2, "2013": 2, "airflow": 2, "dynam": [2, 5], "human": 2, "jet": 2, "potenti": [2, 3, 10], "infecti": 2, "aerosol": 2, "plo": 2, "ONE": 2, "e59970": 2, "doi": 2, "10": [2, 3, 4, 6, 8, 10, 12, 13], "1371": 2, "journal": 2, "pone": 2, "0059970": 2, "chaudhuri": 2, "2020": 2, "role": [2, 5], "type": 2, "phy": 2, "32": [2, 4], "063309": 2, "1063": 2, "0015984": 2, "vansciv": 2, "2011": 2, "imag": [2, 7], "velocimetri": 2, "scienc": 2, "technolog": 2, "45": 2, "415": 2, "422": 2, "1080": 2, "02786826": 2, "2010": 2, "542785": 2, "han": 2, "z": [2, 5, 6, 9], "character": 2, "distribut": [2, 8, 10, 11], "exhal": 2, "soc": 2, "interfac": [2, 13], "20130560": 2, "http": [2, 6], "org": [2, 6], "1098": 2, "rsif": 2, "0560": 2, "dhand": 2, "li": 2, "Their": 2, "viral": 2, "infect": 2, "respir": 2, "crit": 2, "care": [2, 9], "med": 2, "vol": 2, "202": 2, "iss": 2, "pp": 2, "651": 2, "659": 2, "explos": 3, "cannon": 3, "shell": 3, "launch": [3, 10], "small": [3, 4, 9], "howitz": 3, "common": [3, 9], "avalanch": 3, "danger": 3, "intention": 3, "trigger": 3, "prone": 3, "seriou": 3, "sure": 3, "hit": 3, "target": 3, "utah": 3, "dangeoru": 3, "live": 3, "shock": [3, 12], "errant": 3, "bomb": 3, "rip": 3, "pleasant": 3, "grove": 3, "home": 3, "muzzl": 3, "drag": 3, "air": 3, "maximum": [3, 6, 12], "altitud": [3, 8, 10], "One": [3, 6, 13], "thing": 3, "atmospher": 3, "forc": [3, 6, 8, 9, 10, 12], "adiabat": 3, "alpha": [3, 6], "rho_0": 3, "sea": 3, "level": [3, 14], "3": [3, 6, 7, 10, 11, 12, 13], "laps": 3, "rate": 3, "temperatur": 3, "pick": [3, 13], "modifi": [3, 6, 12, 13], "drag_0": 3, "origin": [3, 6, 7, 11], "activ": 3, "heavili": 4, "field": [4, 10, 11], "topic": [4, 7, 8], "typic": 4, "ii": [4, 8], "advantag": 4, "treatment": 4, "easier": 4, "justifi": 4, "even": [4, 12], "power": [4, 9], "around": [4, 5, 6], "concis": 4, "infti": 4, "n": [4, 10, 12], "truncat": 4, "label": [4, 8], "eq": [4, 10], "neglect": 4, "greater": [4, 6, 7], "sai": [4, 5, 8], "later": [4, 7], "method": [4, 9, 13], "linear": [4, 5, 6, 7], "master": [4, 8], "repetit": [4, 8], "three": [4, 10], "recogn": 4, "sin": [4, 6, 13], "polynoim": 4, "thu": [4, 6], "radian": [4, 6], "11": [4, 6, 8, 10], "circ": [4, 6, 8], "sim10": 4, "round": [4, 12], "nearest": 4, "satisfi": 4, "keep": 4, "cosin": 4, "lot": 4, "sine": 4, "easi": 4, "program": 4, "achiev": 4, "accuraci": 4, "64": 4, "benefici": 4, "conceptu": 4, "accumul": 4, "f0": 4, "ones": 4, "len": 4, "f2": [4, 10], "f4": 4, "hline": 4, "dot": [4, 8], "reflect": [4, 9, 13], "black": [4, 10], "lowest": 4, "ok": 4, "pm": 4, "adequ": 4, "consist": 4, "shown": [4, 5, 7, 11], "appear": 4, "almost": 4, "57": 4, "Not": 4, "shappi": 4, "green": [4, 10], "graph": 4, "115": 4, "outstand": 4, "handi": 4, "hot": 4, "stuff": 4, "describ": 4, "e": [4, 8], "incl": 4, "nx": 4, "enough": 4, "instead": [4, 5, 7, 13], "formula": 4, "gamma": 4, "c": [4, 10], "redefin": 4, "previous": [5, 8], "solid": [5, 6, 7], "experienc": [5, 10], "pure": 5, "rotat": [5, 6, 12], "motion": [5, 6, 10], "phase": [5, 13], "detail": [5, 10], "translat": 5, "modul": 5, "refesh": 5, "univers": [5, 6, 8, 10], "restrict": 5, "fix": [5, 6], "center": [5, 6, 7, 8, 10, 11], "plai": 5, "By": 5, "definit": [5, 8, 9], "sens": [5, 9], "segment": [5, 9, 11], "sometim": 5, "pivot": 5, "locat": [5, 7, 9, 10, 12], "straight": 5, "25": [5, 6, 7, 13], "hat": [5, 9, 10, 11], "instant": [5, 7], "reset": [5, 10, 11], "def": 5, "cross_product": 5, "v1": [5, 10], "v2": [5, 10], "vector": [5, 7, 8, 9], "arrai": [5, 8], "return": [5, 13], "r_particl": 5, "part": [5, 6, 12], "r_pivot": 5, "37": [5, 6, 8], "circumst": 5, "ye": 5, "along": [5, 9, 11, 13], "intern": [5, 8, 10], "descript": 5, "cm": [5, 6, 7, 10, 13], "parallel": 5, "addit": 5, "intrins": 5, "l_": 5, "s_z": 5, "i_": 5, "zz": 5, "omega_z": 5, "moment": [5, 6], "inertia": [5, 6], "resist": 5, "associ": [5, 8], "convent": 5, "cw": 5, "_o": 5, "disk": [5, 7], "radiu": [5, 6, 7, 8, 10, 11, 12], "rad": [5, 6], "lsz": 5, "10000000000000002": 5, "extern": 5, "frame": [5, 6, 11], "earth": [5, 8, 10], "sun": [5, 10, 12], "total": [5, 7, 11, 12], "orb": 5, "omega": [5, 7], "m_": [5, 8], "tangenti": [5, 7], "analog": 5, "made": [5, 8, 10], "begin": 5, "quantum": [5, 10], "mechan": [5, 12], "electron": 5, "nucleu": 5, "motiong": 5, "m_e": [5, 8], "972e24": 5, "r_e": [5, 8, 10], "371e6": 5, "60": [5, 10], "ls": 5, "4724e11": 5, "365": 5, "perpendicular": [5, 7], "lo": 5, "051169042234388e": 5, "33": 5, "5795543223110204e": 5, "5795550274279246e": 5, "1": [6, 11, 12, 13], "2": [6, 11, 12, 13], "sphere": [6, 8, 10], "releas": 6, "rest": 6, "ramp": 6, "inclin": 6, "12": 6, "heigh": 6, "surfac": [6, 7, 8, 9, 10, 12], "angular": [6, 13], "bottom": [6, 7], "revolut": [6, 12], "did": 6, "sympi": [6, 10, 11], "sym": [6, 10, 11], "180": [6, 8], "h": 6, "n2": 6, "fg": 6, "ff": 6, "symbol": [6, 8, 10], "static": [6, 7, 12], "ffx": 6, "eq1": 6, "a_theta": 6, "tfz": 6, "eq2": 6, "constraint": 6, "neg": 6, "eq3": 6, "sol1": 6, "float": 6, "v0": 6, "w0": 6, "dtheta": 6, "rev": 6, "456866919230157": 6, "827467676920628": 6, "003570517957253": 6, "716901942948414": 6, "roll": [6, 7], "slip": 6, "multipl": 6, "mr": 6, "slightli": [6, 12, 13], "version": [6, 12, 13], "openstax": [6, 12, 13], "access": [6, 12, 13], "free": [6, 12, 13], "book": 6, "colleg": 6, "2e": [6, 10], "page": 6, "cylind": [6, 12], "except": 6, "frictionless": 6, "slide": 6, "frictionlessli": 6, "short": 6, "equal": 6, "explain": [6, 7, 8, 10], "bowl": 6, "ball": 6, "storag": 6, "top": [6, 7], "across": [6, 10], "stop": [6, 12], "20": [6, 13], "cylindr": [6, 9], "wheel": 6, "pull": [6, 10], "kinet": [6, 12], "mu_": [6, 12], "mu_k": [6, 12], "hollow": 6, "yo": 6, "thought": 6, "light": [6, 10], "string": [6, 13], "wrap": 6, "circumfer": 6, "held": 6, "space": [6, 8, 10], "fall": 6, "unwind": 6, "v_t": 7, "relat": 7, "se": 7, "despit": 7, "edg": [7, 12], "shouldn": 7, "answer": 7, "aid": 7, "puzzl": 7, "There": [7, 9, 12], "video": [7, 10], "sketch": [7, 9], "undergo": 7, "middl": 7, "ani": [7, 8], "radial": 7, "add": 7, "complic": 7, "pattern": 7, "contact": 7, "improv": 7, "drawn": 7, "2r": 7, "respons": 7, "orbit": [7, 10], "momentum": 7, "sping": 7, "fundament": 8, "electr": [8, 9], "strong": 8, "weak": 8, "everi": [8, 12, 13], "aris": 8, "gravit": [8, 10, 11], "focus": 8, "concern": 8, "gauss": 9, "exist": 8, "gravitationa": 8, "magnet": 8, "somewhat": 8, "familair": 8, "newtonian": 8, "believ": 8, "super": 8, "gener": [8, 9], "per": [8, 11, 12], "unit": [8, 9, 11], "quantiti": 8, "letter": [], "flat": [], "tabl": 9, "strength": 8, "everywher": [], "awai": [8, 9, 10, 13], "phys2220": 8, "oint": 8, "gm_": 8, "enclos": 8, "gaussian": 8, "circl": 8, "insid": [8, 10], "product": 8, "da": [8, 9], "symmetr": 8, "planet": 8, "obviou": 8, "furthermor": 8, "perfect": 8, "imagin": 8, "encapsul": 8, "outsid": [8, 9, 10], "imaginari": 8, "geq": 8, "r_": [8, 10], "67": [8, 10], "nm": [8, 10], "97": 8, "station": [8, 10], "400": [8, 10], "km": [8, 10], "geostationari": 8, "satellit": [8, 10], "000": 8, "summar": 8, "moon": 8, "templat": 8, "enter": 8, "equst": 8, "67e": [8, 10], "97e24": [8, 10], "list": 8, "37e6": 8, "r_in": 8, "0e7": 8, "r_out": 8, "g_in": 8, "g_out": 8, "environ": 8, "uncom": 8, "everyth": 8, "TO": 8, "THE": 8, "fig": 8, "add_ax": 8, "fit": 8, "canva": 8, "set_titl": 8, "set_xlabel": 8, "set_ylabel": 8, "text": 8, "To": 9, "gravitaion": 9, "quantit": 9, "useful": 9, "saw": 9, "were": 9, "_g": 9, "gmm": [9, 10], "gm": [9, 10, 11], "connect": [9, 12], "directli": 9, "ti": 9, "prefer": 9, "variou": [9, 10], "charg": [9, 11], "infinitesim": [9, 10], "spatial": 9, "dm": 9, "lambda": [9, 11], "dl": 9, "sigma": 9, "contribut": 9, "gdm": 9, "taken": 9, "graviv": 9, "usual": 9, "cartesian": 9, "xyz": 9, "pythagorean": 9, "theorem": 9, "look": [9, 10], "length": [9, 11, 12], "q": 9, "task": 9, "1d": 9, "3d": [9, 10], "compon": 9, "gmdx": 9, "factor": 9, "Then": 9, "readi": 9, "int_": [9, 10], "bring": 9, "polar": 9, "straightforward": 9, "substitut": 9, "u": [9, 10], "du": [9, 10], "bigg": 9, "rvert_": 9, "back": 9, "denomin": 9, "item": 9, "geometri": 9, "reduc": 9, "2a": 9, "observ": [10, 13], "exception": 10, "galileo": 10, "tycho": 10, "brahe": 10, "kepler": 10, "planetari": 10, "perspect": 10, "r_1": 10, "r_2": 10, "energi": [10, 12], "abc": [10, 11], "oo": 10, "u_oo": 10, "conserv": 10, "escap": 10, "fast": [10, 12], "k1": 10, "u1": 10, "k2": 10, "u2": 10, "mean": 10, "longer": 10, "6378e3": 10, "sol": 10, "3e": 10, "format": 10, "117e": 10, "sim400": 10, "r1": 10, "r2": 10, "400e3": 10, "715e": 10, "f_net": 10, "mv": 10, "period": [10, 12, 13], "circular": 10, "v_st": 10, "evalf": 10, "sub": 10, "t_st": 10, "26e": 10, "hole": 10, "2gm": 10, "particular": 10, "stationari": 10, "schwarzschild": 10, "4142135623731": 10, "event": 10, "horizon": 10, "star": 10, "solar": 10, "collaps": 10, "997e8": 10, "m_sun": 10, "9891e30": 10, "863e": 10, "03": 10, "53": 10, "26": 10, "extrem": 10, "cosmolog": 10, "scale": 10, "inde": 10, "hologram": 10, "2d": 10, "holograph": 10, "pb": 10, "playlist": 10, "Is": 10, "brian": 10, "10e53": 10, "485e": 10, "27": 10, "astronaut": 10, "120": 10, "spaceship": 10, "her": 10, "030": 10, "ear": 10, "farther": 10, "spacecraft": 10, "closer": 10, "tension": 10, "head": 10, "9891e31": 10, "120e3": 10, "06": 10, "f1": 10, "ab": 10, "cg": 10, "NOT": 10, "76e": 10, "04": 10, "uniformli": 11, "ring": 11, "yz": 11, "gmx": 11, "dex": 11, "ex": 11, "dei": 11, "ey": 11, "12837916709551": 11, "thin": 11, "semicircular": 11, "ipykernel_9548": [], "phi": 8, "ipykernel_9693": [], "ipykernel_9839": [], "ipykernel_9975": [], "ipykernel_17932": [], "stroboscop": 12, "flash": 12, "frequenc": [12, 13], "piston": 12, "sharp": 12, "sound": [12, 13], "race": 12, "car": 12, "eight": 12, "emit": 12, "750": 12, "hz": 12, "2000": 12, "kilomet": 12, "minut": 12, "student": 12, "stand": 12, "merri": 12, "five": 12, "produc": [12, 13], "shadow": 12, "nearbi": 12, "build": 12, "pendulum": 12, "500": 12, "00000": 12, "80": 12, "99796": 12, "amplitud": [12, 13], "lightli": 12, "damp": 12, "oscil": 12, "decreas": 12, "dure": 12, "cycl": 12, "percentag": [12, 13], "lost": 12, "suspens": 12, "dampen": 12, "displac": 12, "0750": 12, "suppos": 12, "spring": 12, "150": 12, "stretch": 12, "twice": 12, "0850": 12, "ipykernel_18072": [], "ipykernel_21542": [], "wave": 13, "swim": 13, "pool": 13, "75": 13, "splash": 13, "water": 13, "opposit": 13, "qualiti": 13, "assur": 13, "fry": 13, "pan": 13, "compani": 13, "ask": 13, "qualifi": 13, "nonstick": 13, "coat": 13, "mm": 13, "thick": 13, "manufactur": 13, "strip": 13, "micromet": 13, "destruct": 13, "decid": 13, "nondestruct": 13, "ultrason": 13, "transduc": 13, "khz": 13, "sent": 13, "metal": 13, "record": 13, "wavelength": 13, "076": 13, "transvers": 13, "equilibrium": 13, "90": 13, "shift": 13, "sinusoid": 13, "y1": 13, "y2": 13, "interfer": 13, "ipykernel_97685": [], "ipykernel_98240": [], "ipykernel_99060": [], "ipykernel_99641": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"a1": [0, 1, 2, 3, 4], "2": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10], "numer": [0, 1, 2], "integr": 0, "finit": [0, 1], "differ": [0, 1], "method": [0, 1, 2], "1": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10], "motiv": [0, 4, 5, 7, 8, 9, 10], "linear": 0, "3": [0, 1, 2, 4, 5, 8, 9], "taylor": [0, 4], "seri": [0, 4], "mathemat": 0, "trick": 0, "truncat": 0, "question": 0, "answer": 0, "4": [0, 2, 5], "first": 0, "order": 0, "forward": 0, "practic": 1, "suggest": 1, "solv": [1, 9], "strategi": [1, 9], "A": [1, 7, 14], "equat": [1, 2], "b": 1, "realist": [2, 3], "projectil": [2, 3], "motion": [2, 3, 7], "project": [2, 3], "covid": 2, "19": 2, "object": [2, 5], "background": 2, "physic": [2, 14], "molecul": 2, "methodolog": [2, 9], "air": 2, "drag": 2, "compon": 2, "iter": 2, "auxiliari": 2, "valu": 2, "result": 2, "sneez": 2, "droplet": 2, "quick": 2, "observ": 2, "breath": 2, "5": [2, 3], "summari": 2, "6": 2, "refer": 2, "artilleri": 3, "problem": [3, 6, 11, 12, 13], "expans": 4, "s": [4, 8, 9, 10], "binomi": 4, "a2": [5, 6, 7], "angular": [5, 7], "momentum": 5, "revisit": 5, "point": [5, 9], "particl": 5, "momemtum": 5, "rigid": 5, "spin": 5, "orbit": 5, "combin": [5, 7], "x": [6, 11, 12, 13], "note": 7, "translat": 7, "rotat": 7, "speed": 7, "d6": 7, "superposit": 7, "veloc": 7, "pure": 7, "a3": [8, 9, 10, 11], "field": [8, 9], "flux": 8, "newton": [9, 10], "law": [8, 9, 10], "graviti": [9, 10], "mass": 9, "distribut": 9, "gravit": 9, "c6": 9, "set": 9, "up": 9, "solut": 9, "compet": 14, "approach": 14, "univers": 14, "i": 14, "compendium": 14, "exam": 14, "gauss": 8, "a4": 12, "a5": 13}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})