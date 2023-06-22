type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
/// 브랜치변경 확인
