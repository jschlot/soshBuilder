preferred_syntax = :sass
relative_assets = true

if environment == :development
    line_comments = true
    output_style = :expanded
end

if environment == :production
    line_comments = false
    output_style = :compressed
end 
