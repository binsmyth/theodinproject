def wrap(m,n)
  if n>=0
    n % m
  else
    (n % m + m) % m
  end
end

def caesar_cipher (word, shift)
  chars = word.chars
  shifted_character = chars.map{
    |value|
    if value.ord >=97 &&  value.ord <=122
      alpha_limit = 97
    end
    if value.ord >= 65 && value.ord <= 90
      alpha_limit = 65
    end
    if value.ord != 32 && value.ord != 33
      wrap(26, value.ord + 5  - alpha_limit) + alpha_limit
    else
      value.ord
    end
  }
  shifted_character.map{|value| value.chr}.join("")
end
puts caesar_cipher('Hello',0)

