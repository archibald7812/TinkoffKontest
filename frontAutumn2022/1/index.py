from collections import defaultdict


def main(s, ranges):
    char_map = defaultdict(list)
    for index, char in enumerate(s):
        char_map[char].append(index + 1)
    sorted_chars = sorted(char_map)
    # print(char_map)
    # print(sorted_chars)
    for range_ in ranges:
        # print(range_)
        print(count_steps(char_map, sorted_chars, range_))


def count_steps(char_map, sorted_chars, char_range):
    l, r = char_range	 
    range_len = r - l + 1
    curr_pos = l
    steps_count = 0
    for char in sorted_chars:
        for pos in char_map[char]:
            if l <= pos <= r:
                if pos >= curr_pos:
                    steps_count += pos - curr_pos
                else:
                    steps_count += range_len - curr_pos + pos
                curr_pos = pos
    return steps_count


if __name__ == '__main__':
    # s_ = "hello"
    # n_ = 3
    # ranges_ = [
    #     (1, 5),
    #     (1, 2),
    #     (2, 5),
    # ]
    # prompt = "->"
    prompt = ""
    s_ = input(prompt)
    n_ = int(input(prompt))
    ranges_ = []
    for _ in range(n_):
        l_, r_ = input(prompt).split()
        ranges_.append((int(l_), int(r_)))
    main(s_, ranges_)