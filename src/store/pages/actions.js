export const CHANGE_PAGE = "CHANGE_PAGE";

export function changePage(pageName) {
    return {
        type: CHANGE_PAGE, pageName,
    }
}