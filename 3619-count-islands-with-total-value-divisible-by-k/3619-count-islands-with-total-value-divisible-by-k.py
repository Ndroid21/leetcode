class Solution:
    def countIslands(self, grid: List[List[int]], k: int) -> int:
        row = len(grid)
        col = len(grid[0])
        visited = set()
        count = 0

        def get_neighbors(r, c):
            delta_row = [-1, 0, 1, 0]
            delta_col = [0, 1, 0, -1]
            neighbor = []

            for i in range(4):
                nr = delta_row[i] + r
                nc = delta_col[i] + c

                if nr >= 0 and nr < row and nc >= 0 and nc < col and grid[nr][nc] != 0:
                    neighbor.append([nr, nc])

            return neighbor

        def bfs(root):
            nonlocal count
            r, c = root
            q = deque([root])
            visited.add((r, c))
            sum = grid[r][c]

            while q:
                rq, cq = q.popleft()

                for nr, nc in get_neighbors(rq, cq):
                    if (nr, nc) in visited:
                        continue

                    visited.add((nr, nc))
                    q.append([nr, nc])
                    sum += grid[nr][nc]

            if sum % k == 0:
                count += 1

        for i in range(row):
            for j in range(col):
                if grid[i][j] != 0 and (i, j) not in visited:
                    bfs([i, j])

        return count
