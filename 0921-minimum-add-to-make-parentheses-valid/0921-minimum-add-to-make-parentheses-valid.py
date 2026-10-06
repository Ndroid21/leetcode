class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        st = []

        count = 0
        for c in s:
            if c == '(':
                st.append('(')
            else:
                if st:
                    st.pop()
                else:
                    count += 1

        count += len(st)

        return count