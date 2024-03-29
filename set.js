/**
 * Create an empty Set
 * O(1)
 * @returns {function(*): boolean}
 */
export const empty = ()=>(element)=>false;

/**
 * Create a Set with one element
 * O(1)
 * @param element {*}
 * @returns {function(*): boolean}
 */
export const singletonSet = (element)=>(anotherElement)=>element==anotherElement;

/**
 * Check wether an element is inside a Set
 * O(n)
 * @param set {function(*): boolean}
 * @param element {*}
 * @returns boolean
 */
export const contains = (set,element)=> set(element);

/**
 * Create the union of two Sets (A ∪ B)
 * O(1)
 * @param setA {function(*): boolean}
 * @param setB {function(*): boolean}
 * @returns {function(*): boolean}
 */
export const union = (setA,setB) => (element)=>contains(setA,element) || contains(setB,element);

/**
 * Create the intersection of two Sets (A ∩ B)
 * O(1)
 * @param setA {function(*): boolean}
 * @param setB {function(*): boolean}
 * @returns {function(*): boolean}
 */
export const intersect = (setA,setB)=> (element)=>contains(setA,element) && contains(setB,element);

/**
 * Create the difference of two sets (A / B)
 * O(1)
 * @param setA {function(*): boolean}
 * @param setB {function(*): boolean}
 * @returns {function(*): boolean}
 */
export const diff = (setA,setB)=> (element)=>contains(setA,element) && !contains(setB,element);


/**
 * Return a Set of Elements that Match condition
 * O(1)
 * @param set {function(*): boolean}
 * @param condition {function(*): boolean}
 * @returns {function(*): boolean}
 */
export const filter = (set,condition) => (element)=>condition(element) && contains(set,element);



