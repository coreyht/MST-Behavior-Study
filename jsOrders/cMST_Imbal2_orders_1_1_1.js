var trial_stim=[
  /* CT -- 
    trial: question number, each is shown in order (note the correct_resp.)
    image: image shown
    type: ???, only 0-3 (4 types)
    correct_resp: correct response. 0 = old, 1 = similar, 2 = new (cont_omst line 384)
    lag: number of items shown between it and its lure???, vals are either -1 or some + integer
    lbin: "lure bin," appears to mean either most similar to or least similar to on a scale of 1-5
      (but to what i'm not sure, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6991464/ )
      (could mean how similar it and its lure are to one another as a pair)
      (apparently some files don't have lbins, in which case default = 0??? not sure. cont_omst line 402)


    note to self:
      targets are images that exact repetitions of images seen in the study phase (so seen already?)
      foils are new images not previously seen
      lures are similar images to targets but not exactly (so different images)

      correct_resp is only used in tasks 1 and 2, not 3 (will still have correct_resp but will be irrelevant to the study)

    cont_omst only seems to pull from the 2x3 ver of this though
  */
  {trial: 0, image: 'Set 1_rs/147a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 1, image: 'Set 1_rs/107a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 2},
  {trial: 2, image: 'Set 1_rs/092a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 3, image: 'Set 1_rs/075a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 4, image: 'Set 1_rs/077a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 5, image: 'Set 1_rs/024a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 6, image: 'Set 1_rs/107b.jpg', type: 3, correct_resp: 1, lag: 4, lbin: 2},
  {trial: 7, image: 'Set 1_rs/092b.jpg', type: 3, correct_resp: 1, lag: 4, lbin: 3},
  {trial: 8, image: 'Set 1_rs/184a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 9, image: 'Set 1_rs/139a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 1},
  {trial: 10, image: 'Set 1_rs/048a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 1},
  {trial: 11, image: 'Set 1_rs/075b.jpg', type: 3, correct_resp: 1, lag: 7, lbin: 5},
  {trial: 12, image: 'Set 1_rs/176a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 13, image: 'Set 1_rs/122a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 2},
  {trial: 14, image: 'Set 1_rs/017a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 15, image: 'Set 1_rs/151a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 16, image: 'Set 1_rs/179a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 17, image: 'Set 1_rs/147b.jpg', type: 3, correct_resp: 1, lag: 16, lbin: 5},
  {trial: 18, image: 'Set 1_rs/024b.jpg', type: 3, correct_resp: 1, lag: 12, lbin: 3},
  {trial: 19, image: 'Set 1_rs/095a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 4},
  {trial: 20, image: 'Set 1_rs/077b.jpg', type: 3, correct_resp: 1, lag: 15, lbin: 5},
  {trial: 21, image: 'Set 1_rs/184b.jpg', type: 3, correct_resp: 1, lag: 12, lbin: 5},
  {trial: 22, image: 'Set 1_rs/063a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 23, image: 'Set 1_rs/151b.jpg', type: 3, correct_resp: 1, lag: 7, lbin: 3},
  {trial: 24, image: 'Set 1_rs/146a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 2},
  {trial: 25, image: 'Set 1_rs/017b.jpg', type: 3, correct_resp: 1, lag: 10, lbin: 3},
  {trial: 26, image: 'Set 1_rs/139a.jpg', type: 1, correct_resp: 0, lag: 16, lbin: 1},
  {trial: 27, image: 'Set 1_rs/160a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 28, image: 'Set 1_rs/048a.jpg', type: 1, correct_resp: 0, lag: 17, lbin: 1},
  {trial: 29, image: 'Set 1_rs/191a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 1},
  {trial: 30, image: 'Set 1_rs/101a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 2},
  {trial: 31, image: 'Set 1_rs/063b.jpg', type: 3, correct_resp: 1, lag: 8, lbin: 5},
  {trial: 32, image: 'Set 1_rs/072a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 33, image: 'Set 1_rs/124a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 2},
  {trial: 34, image: 'Set 1_rs/065a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 35, image: 'Set 1_rs/095b.jpg', type: 3, correct_resp: 1, lag: 15, lbin: 4},
  {trial: 36, image: 'Set 1_rs/117a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 4},
  {trial: 37, image: 'Set 1_rs/154a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 4},
  {trial: 38, image: 'Set 1_rs/124b.jpg', type: 3, correct_resp: 1, lag: 4, lbin: 2},
  {trial: 39, image: 'Set 1_rs/072b.jpg', type: 3, correct_resp: 1, lag: 6, lbin: 3},
  {trial: 40, image: 'Set 1_rs/051a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 2},
  {trial: 41, image: 'Set 1_rs/176b.jpg', type: 3, correct_resp: 1, lag: 28, lbin: 5},
  {trial: 42, image: 'Set 1_rs/179b.jpg', type: 3, correct_resp: 1, lag: 25, lbin: 5},
  {trial: 43, image: 'Set 1_rs/027a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 1},
  {trial: 44, image: 'Set 1_rs/122b.jpg', type: 3, correct_resp: 1, lag: 30, lbin: 2},
  {trial: 45, image: 'Set 1_rs/113a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 46, image: 'Set 1_rs/160b.jpg', type: 3, correct_resp: 1, lag: 18, lbin: 3},
  {trial: 47, image: 'Set 1_rs/047a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 48, image: 'Set 1_rs/191a.jpg', type: 1, correct_resp: 0, lag: 18, lbin: 1},
  {trial: 49, image: 'Set 1_rs/027a.jpg', type: 1, correct_resp: 0, lag: 5, lbin: 1},
  {trial: 50, image: 'Set 1_rs/148a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 2},
  {trial: 51, image: 'Set 1_rs/159a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 4},
  {trial: 52, image: 'Set 1_rs/146a.jpg', type: 1, correct_resp: 0, lag: 27, lbin: 2},
  {trial: 53, image: 'Set 1_rs/047b.jpg', type: 3, correct_resp: 1, lag: 5, lbin: 3},
  {trial: 54, image: 'Set 1_rs/178a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 4},
  {trial: 55, image: 'Set 1_rs/096a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 4},
  {trial: 56, image: 'Set 1_rs/154b.jpg', type: 3, correct_resp: 1, lag: 18, lbin: 4},
  {trial: 57, image: 'Set 1_rs/065b.jpg', type: 3, correct_resp: 1, lag: 22, lbin: 5},
  {trial: 58, image: 'Set 1_rs/101a.jpg', type: 1, correct_resp: 0, lag: 27, lbin: 2},
  {trial: 59, image: 'Set 1_rs/036a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 4},
  {trial: 60, image: 'Set 1_rs/114a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 61, image: 'Set 1_rs/141a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 62, image: 'Set 1_rs/113b.jpg', type: 3, correct_resp: 1, lag: 16, lbin: 3},
  {trial: 63, image: 'Set 1_rs/169a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 64, image: 'Set 1_rs/117b.jpg', type: 3, correct_resp: 1, lag: 27, lbin: 4},
  {trial: 65, image: 'Set 1_rs/162a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 66, image: 'Set 1_rs/141a.jpg', type: 1, correct_resp: 0, lag: 4, lbin: 3},
  {trial: 67, image: 'Set 1_rs/110a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 1},
  {trial: 68, image: 'Set 1_rs/036b.jpg', type: 3, correct_resp: 1, lag: 8, lbin: 4},
  {trial: 69, image: 'Set 1_rs/051a.jpg', type: 1, correct_resp: 0, lag: 28, lbin: 2},
  {trial: 70, image: 'Set 1_rs/114b.jpg', type: 3, correct_resp: 1, lag: 9, lbin: 3},
  {trial: 71, image: 'Set 1_rs/189a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 72, image: 'Set 1_rs/148a.jpg', type: 1, correct_resp: 0, lag: 21, lbin: 2},
  {trial: 73, image: 'Set 1_rs/096b.jpg', type: 3, correct_resp: 1, lag: 17, lbin: 4},
  {trial: 74, image: 'Set 1_rs/169a.jpg', type: 1, correct_resp: 0, lag: 10, lbin: 5},
  {trial: 75, image: 'Set 1_rs/110b.jpg', type: 3, correct_resp: 1, lag: 7, lbin: 1},
  {trial: 76, image: 'Set 1_rs/057a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 77, image: 'Set 1_rs/192a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 2},
  {trial: 78, image: 'Set 1_rs/020a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 79, image: 'Set 1_rs/159b.jpg', type: 3, correct_resp: 1, lag: 27, lbin: 4},
  {trial: 80, image: 'Set 1_rs/006a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 1},
  {trial: 81, image: 'Set 1_rs/105a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 4},
  {trial: 82, image: 'Set 1_rs/085a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 1},
  {trial: 83, image: 'Set 1_rs/076a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 1},
  {trial: 84, image: 'Set 1_rs/165a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 1},
  {trial: 85, image: 'Set 1_rs/178b.jpg', type: 3, correct_resp: 1, lag: 30, lbin: 4},
  {trial: 86, image: 'Set 1_rs/105a.jpg', type: 1, correct_resp: 0, lag: 4, lbin: 4},
  {trial: 87, image: 'Set 1_rs/015a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 1},
  {trial: 88, image: 'Set 1_rs/132a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 2},
  {trial: 89, image: 'Set 1_rs/189a.jpg', type: 1, correct_resp: 0, lag: 17, lbin: 5},
  {trial: 90, image: 'Set 1_rs/023a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 4},
  {trial: 91, image: 'Set 1_rs/076b.jpg', type: 3, correct_resp: 1, lag: 7, lbin: 1},
  {trial: 92, image: 'Set 1_rs/162a.jpg', type: 1, correct_resp: 0, lag: 26, lbin: 3},
  {trial: 93, image: 'Set 1_rs/165a.jpg', type: 1, correct_resp: 0, lag: 8, lbin: 1},
  {trial: 94, image: 'Set 1_rs/083a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 95, image: 'Set 1_rs/192b.jpg', type: 3, correct_resp: 1, lag: 17, lbin: 2},
  {trial: 96, image: 'Set 1_rs/152a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 4},
  {trial: 97, image: 'Set 1_rs/123a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 4},
  {trial: 98, image: 'Set 1_rs/135a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 99, image: 'Set 1_rs/158a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 4},
  {trial: 100, image: 'Set 1_rs/085a.jpg', type: 1, correct_resp: 0, lag: 17, lbin: 1},
  {trial: 101, image: 'Set 1_rs/057a.jpg', type: 1, correct_resp: 0, lag: 24, lbin: 5},
  {trial: 102, image: 'Set 1_rs/011a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 1},
  {trial: 103, image: 'Set 1_rs/006a.jpg', type: 1, correct_resp: 0, lag: 22, lbin: 1},
  {trial: 104, image: 'Set 1_rs/056a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 1},
  {trial: 105, image: 'Set 1_rs/020b.jpg', type: 3, correct_resp: 1, lag: 26, lbin: 3},
  {trial: 106, image: 'Set 1_rs/094a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 107, image: 'Set 1_rs/083a.jpg', type: 1, correct_resp: 0, lag: 12, lbin: 3},
  {trial: 108, image: 'Set 1_rs/181a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 109, image: 'Set 1_rs/132b.jpg', type: 3, correct_resp: 1, lag: 20, lbin: 2},
  {trial: 110, image: 'Set 1_rs/056b.jpg', type: 3, correct_resp: 1, lag: 5, lbin: 1},
  {trial: 111, image: 'Set 1_rs/158b.jpg', type: 3, correct_resp: 1, lag: 11, lbin: 4},
  {trial: 112, image: 'Set 1_rs/099a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 1},
  {trial: 113, image: 'Set 1_rs/067a.jpg', type: 0, correct_resp: 2, lag: -1, lbin: 3},
  {trial: 114, image: 'Set 1_rs/181b.jpg', type: 3, correct_resp: 1, lag: 5, lbin: 5},
  {trial: 115, image: 'Set 1_rs/152b.jpg', type: 3, correct_resp: 1, lag: 18, lbin: 4},
  {trial: 116, image: 'Set 1_rs/123b.jpg', type: 3, correct_resp: 1, lag: 18, lbin: 4},
  {trial: 117, image: 'Set 1_rs/015b.jpg', type: 3, correct_resp: 1, lag: 29, lbin: 1},
  {trial: 118, image: 'Set 1_rs/090a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 5},
  {trial: 119, image: 'Set 1_rs/099a.jpg', type: 1, correct_resp: 0, lag: 6, lbin: 1},
  {trial: 120, image: 'Set 1_rs/040a.jpg', type: 2, correct_resp: 2, lag: -1, lbin: 2},
  {trial: 121, image: 'Set 1_rs/023b.jpg', type: 3, correct_resp: 1, lag: 30, lbin: 4},
  {trial: 122, image: 'Set 1_rs/094b.jpg', type: 3, correct_resp: 1, lag: 15, lbin: 3},
  {trial: 123, image: 'Set 1_rs/135b.jpg', type: 3, correct_resp: 1, lag: 24, lbin: 5},
  {trial: 124, image: 'Set 1_rs/067a.jpg', type: 1, correct_resp: 0, lag: 10, lbin: 3},
  {trial: 125, image: 'Set 1_rs/011b.jpg', type: 3, correct_resp: 1, lag: 22, lbin: 1},
  {trial: 126, image: 'Set 1_rs/040b.jpg', type: 3, correct_resp: 1, lag: 5, lbin: 2},
  {trial: 127, image: 'Set 1_rs/090b.jpg', type: 3, correct_resp: 1, lag: 8, lbin: 5}
]
