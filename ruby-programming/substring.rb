def substrings(word,dictionary)
  matched_word_num = {};
  dictionary.each{|value| 
    matched_value =  word.downcase.scan(/#{value}/).length
    matched_word_num[value] = matched_value
  }
  matched_word_num.select {|key,value| value!=0}
end

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

dictionary_count = substrings("Howdy partner, sit down! How's it going?", dictionary)

puts dictionary_count
