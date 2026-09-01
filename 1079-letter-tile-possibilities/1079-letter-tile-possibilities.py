class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        tiles = ''.join(sorted(tiles))
        used = [0] * 26

        def getIndexFromTiles(index):
            return ord(tiles[index]) - ord('A')

        for i in range(len(tiles)):
            index = getIndexFromTiles(i)
            used[index] += 1

        def dfs(length):
            if length == len(tiles):
                return 0

            count = 0
            
            for i in range(len(tiles)):
                if i > 0 and tiles[i] == tiles[i-1]:
                    continue
                
                index = getIndexFromTiles(i)

                if used[index] <= 0:
                    continue

                used[index] -= 1
                count += 1

                count += dfs(length + 1)

                used[index] += 1
            
            return count
        
        return dfs(0)
    