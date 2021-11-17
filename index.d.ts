declare function selfAs<T>(value: T): <R>(callback: (value: T) => R) => R
export = selfAs
