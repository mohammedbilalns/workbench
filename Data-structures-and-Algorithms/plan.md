# 📅 DAY 1 — Linear DS Mastery

**Focus:** Arrays, Strings, Linked List, HashMap/Set
**Goal:** Pattern recognition + implementation fluency

---

## ⏱️ Session Structure

* Total: ~8–10 hours
* 4 blocks × 2–2.5 hrs
* Each problem: **15–25 min max**

---

## 🔹 Block 1: Arrays + Sliding Window

**Patterns:**

* Two pointers
* Sliding window (fixed + variable)
* Prefix sum

### Must Solve

* Longest Substring Without Repeating Characters
* Maximum Subarray
* Subarray Sum Equals K
* Move Zeroes
* Container With Most Water

### Add (Striver)

* Longest consecutive sequence
* Count subarrays with XOR K

👉 **Focus Insight**

* Convert brute → optimize using prefix / window
* Recognize when window breaks

---

## 🔹 Block 2: Strings Deep Dive

**Patterns:**

* Frequency map
* Expand around center
* KMP intuition (optional refresh)

### Must Solve

* Valid Anagram
* Group Anagrams
* Longest Palindromic Substring
* Minimum Window Substring

### Add Custom (Important for you)

* Longest substring without repeating (redo from memory)
* String compression / in-place modification

👉 **Focus Insight**

* Map vs array freq tradeoff
* Window shrinking logic

---

## 🔹 Block 3: Linked List (High Priority)

**Patterns:**

* Fast/slow pointer
* Dummy node
* In-place reversal

### Must Solve

* Reverse Linked List
* Linked List Cycle
* Merge Two Sorted Lists
* Remove Nth Node From End

### Advanced (Matches your examples)

* Swap middle nodes in doubly linked list
* Reverse doubly linked list
* Sort doubly linked list

👉 **Focus Insight**

* Pointer manipulation without extra space
* Edge cases: head, tail, single node

---

## 🔹 Block 4: HashMap / HashSet Patterns

**Patterns:**

* Counting
* Lookup optimization
* Prefix hashing

### Must Solve

* Two Sum
* Contains Duplicate
* Longest Consecutive Sequence
* Top K Frequent Elements

### Custom Problems

* Sum of values at index (3,6,9…) → traversal logic
* Frequency-based filtering

👉 **Focus Insight**

* When to trade space for O(1) lookup
* Hash collisions don’t matter → logic does

---

# 📅 DAY 2 — Advanced DS + Patterns

**Focus:** Trees, Graphs, Heap, Recursion, Backtracking

---

## 🔹 Block 1: Trees (Core)

**Patterns:**

* DFS (in/pre/post)
* BFS (level order)
* Recursion

### Must Solve

* Maximum Depth of Binary Tree
* Binary Tree Level Order Traversal
* Diameter of Binary Tree
* Balanced Binary Tree

👉 **Focus Insight**

* Return values from recursion
* Global vs local state

---

## 🔹 Block 2: BST + Advanced Tree

* Validate Binary Search Tree
* Lowest Common Ancestor of BST
* Kth Smallest Element in a BST

👉 **Focus Insight**

* Inorder = sorted
* Constraints propagation

---

## 🔹 Block 3: Heap / Priority Queue

**Patterns:**

* Top K
* Min/Max heap

### Must Solve

* Kth Largest Element in an Array
* Merge K Sorted Lists
* Top K Frequent Elements

👉 **Focus Insight**

* Heap size optimization (k vs n)

---

## 🔹 Block 4: Graphs (Critical)

**Patterns:**

* BFS / DFS
* Cycle detection
* Topological sort

### Must Solve

* Number of Islands
* Course Schedule
* Clone Graph

👉 **Focus Insight**

* Visited tracking
* Adjacency list vs matrix

---

## 🔹 Block 5: Recursion + Backtracking

* Subsets
* Permutations
* Combination Sum

👉 **Focus Insight**

* Decision tree thinking
* Base case discipline

---

# ⚡ Final 2-Hour Drill (Day 2 Night)

* Redo **5 problems from memory**
* No IDE help
* Write clean code in one go

---

# 🧠 Meta-Level Advice (This matters more than problems)

* Don’t chase quantity → chase **pattern recall**
* Speak the pattern before coding:

  * “This is sliding window”
  * “This is slow-fast pointer”
* Rebuild mental map:

  * Problem → Pattern → Template



# 🎯 Mock Interview Structure

**Total Duration:** ~60–75 min

* Round 1: Linear DS + Problem Solving (30–35 min)
* Round 2: Advanced DS + Systematic Thinking (30–35 min)

---

# 🧠 RULES (Follow strictly)

* Think out loud (important)
* No jumping to code immediately
* State:

  * Brute force
  * Optimization
  * Complexity
* I’ll interrupt like a real interviewer if needed

---

# 🔹 ROUND 1 — Linear DS (Arrays + Hashing + Sliding Window)

## Problem 1 (Warm-up but tricky)

Longest Substring Without Repeating Characters

### Prompt

Given a string `s`, return the length of the longest substring without repeating characters.

### Constraints

* 1 ≤ s.length ≤ 10⁵
* ASCII characters

---

## What I Expect From You

1. Brute force approach
2. Identify inefficiency
3. Optimal approach (Sliding Window + HashSet/Map)
4. Code with edge cases

---

## Follow-up (I will ask during interview)

* What if characters are Unicode?
* Can you do it without a set?

---

# 🔹 Problem 2 (Custom — Matches your examples)

### Prompt

Given a **doubly linked list**, swap the **k-th node from start** with the **k-th node from end**.

### Constraints

* Must be **in-place**
* No value swapping (node swap only)

---

## What I Expect

* Pointer manipulation clarity
* Edge case handling:

  * k > n
  * adjacent nodes
  * head/tail swap

---

# 🔹 ROUND 2 — Advanced DS

---

## Problem 3 (Tree)

Diameter of Binary Tree

### Prompt

Find the diameter (longest path between any two nodes).

---

## What I Expect

* Recursive thinking
* Height + diameter relation
* O(n) solution

---

## Follow-up

* Can you do it iteratively?
* What if tree is weighted?

---

## Problem 4 (Graph — Core Interview Question)

Course Schedule

### Prompt

Determine if you can finish all courses given prerequisites.

---

## What I Expect

* Detect cycle in directed graph
* DFS or Kahn’s algorithm

---

## Follow-up

* Return the order (topological sort)
* Handle large inputs efficiently

---

# 🔥 Bonus Problem (If time permits)

## Heap / Design Hybrid

Top K Frequent Elements

---

# 🧪 Evaluation Criteria (How you’ll be judged)

| Area                  | What I Check                          |
| --------------------- | ------------------------------------- |
| Problem Understanding | Do you clarify constraints?           |
| Pattern Recognition   | Do you map to known patterns quickly? |
| Code Quality          | Clean, edge-case safe                 |
| Optimization          | Do you reach optimal?                 |
| Communication         | Clear structured thinking             |

---

# 🚨 Now Let’s Start (Interactive Mode)

We’ll go **step-by-step like a real interview**.

---

## 👉 Question 1

(Longest substring without repeating characters)

**Start by explaining your brute force approach.**

Don’t jump to optimal yet. I’ll guide you like an interviewer.
